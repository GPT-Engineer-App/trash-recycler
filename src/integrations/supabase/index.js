import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_CODEHOOKS_API_URL;
const API_KEY = import.meta.env.VITE_CODEHOOKS_API_KEY;

const fromCodehooks = async (endpoint, method = 'GET', data = null) => {
  const config = {
    method,
    url: `${API_BASE_URL}/${endpoint}`,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    data,
  };
  const response = await axios(config);
  if (response.status >= 400) throw new Error(response.statusText);
  return response.data;
};

import React from "react";
export const queryClient = new QueryClient();
export function CodehooksProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

// Hooks for users
export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromCodehooks('users'),
});

export const useUser = (id) => useQuery({
    queryKey: ['user', id],
    queryFn: () => fromCodehooks(`users/${id}`),
});

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromCodehooks('users', 'POST', newUser),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUser) => fromCodehooks(`users/${updatedUser.id}`, 'PUT', updatedUser),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromCodehooks(`users/${id}`, 'DELETE'),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

// Hooks for posts
export const usePosts = () => useQuery({
    queryKey: ['posts'],
    queryFn: () => fromCodehooks('posts'),
});

export const usePost = (id) => useQuery({
    queryKey: ['post', id],
    queryFn: () => fromCodehooks(`posts/${id}`),
});

export const useAddPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPost) => fromCodehooks('posts', 'POST', newPost),
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
};

export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedPost) => fromCodehooks(`posts/${updatedPost.id}`, 'PUT', updatedPost),
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
};

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromCodehooks(`posts/${id}`, 'DELETE'),
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
};

// Hooks for comments
export const useComments = () => useQuery({
    queryKey: ['comments'],
    queryFn: () => fromCodehooks('comments'),
});

export const useComment = (id) => useQuery({
    queryKey: ['comment', id],
    queryFn: () => fromCodehooks(`comments/${id}`),
});

export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newComment) => fromCodehooks('comments', 'POST', newComment),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useUpdateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedComment) => fromCodehooks(`comments/${updatedComment.id}`, 'PUT', updatedComment),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromCodehooks(`comments/${id}`, 'DELETE'),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};