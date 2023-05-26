import axios from 'axios'
import React from 'react'
import { setPosts, setPostsDetails } from '../reducers/post';
import {toast} from "react-toastify"

export const getposts = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_POST_API}/posts`
        );
        dispatch(setPosts(response.data));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(error.response.data.message);
            return;
        }
        toast.error(error.message);
    }
}


export const getPostDetails = (id) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_POST_API}/posts/${id}`
        );
        dispatch(setPostsDetails(response.data));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            toast.error(error.response.data.message);
            return;
        }
        toast.error(error.message);
    }
}