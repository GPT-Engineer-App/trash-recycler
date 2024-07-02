from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import sqlite3
import os

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

DATABASE = 'database/object_detection.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    return conn

@app.route('/api/detections', methods=['POST'])
def save_detection():
    data = request.json
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO detections (object, count, timestamp) VALUES (?, ?, ?)",
                   (data['object'], data['count'], data['timestamp']))
    conn.commit()
    conn.close()
    return jsonify({"status": "success"}), 201

@app.route('/api/settings', methods=['GET', 'POST'])
def settings():
    if request.method == 'POST':
        data = request.json
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("UPDATE settings SET brightness = ?, quality = ?, fps = ? WHERE id = 1",
                       (data['brightness'], data['quality'], data['fps']))
        conn.commit()
        conn.close()
        return jsonify({"status": "success"}), 200
    else:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT brightness, quality, fps FROM settings WHERE id = 1")
        settings = cursor.fetchone()
        conn.close()
        return jsonify({"brightness": settings[0], "quality": settings[1], "fps": settings[2]}), 200

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('detection_event')
def handle_detection_event(data):
    emit('detection_response', data, broadcast=True)

if __name__ == '__main__':
    if not os.path.exists(DATABASE):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE detections
                          (id INTEGER PRIMARY KEY AUTOINCREMENT,
                           object TEXT NOT NULL,
                           count INTEGER NOT NULL,
                           timestamp TEXT NOT NULL)''')
        cursor.execute('''CREATE TABLE settings
                          (id INTEGER PRIMARY KEY,
                           brightness INTEGER NOT NULL,
                           quality INTEGER NOT NULL,
                           fps INTEGER NOT NULL)''')
        cursor.execute("INSERT INTO settings (id, brightness, quality, fps) VALUES (1, 50, 720, 30)")
        conn.commit()
        conn.close()
    socketio.run(app, host='0.0.0.0', port=5000)