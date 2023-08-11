import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat",
    initialState:{
        chats:[],
    },
    reducers:{
        addChats : (state, action) => {
            state.chats.splice(20,1);
            state.chats.unshift(action.payload);
        }
    }
});

export const {addChats} = chatSlice.actions;
export default chatSlice.reducer;