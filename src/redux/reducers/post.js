import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    postDetails: null, 
}

const postSlicer = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        }, 
        setPostsDetails: (state, action) => {
            state.postDetails = action.payload;
        },
    }
})

export const {setPosts, setPostsDetails} = postSlicer.actions;

export default postSlicer.reducer;