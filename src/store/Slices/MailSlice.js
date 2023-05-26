import {createSlice} from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name:'mail',
    initialState:{
        composeIsOpen:false,
        selectedMessage:null,
        isInbox:true,
        isSentBox:false,
        allMails:[],
        inbox:[],
        sentMails:[]
    },
    reducers:{
        setComposeOpen:(state, action)=>{
            state.composeIsOpen=action.payload
        },
        setSelectedMessage:(state, action)=>{
            state.selectedMessage= action.payload
        },
        setIsInbox:(state)=>{
            state.isInbox=true
            state.isSentBox=false
        },
        setIsSentBox:(state)=>{
            state.isInbox=false
            state.isSentBox=true
        },
        setAllMails:(state,action)=>{
            state.allMails=action.payload
        },
        setInbox:(state,action)=>{
            state.inbox = action.payload
        },
        setSentMails:(state,action)=>{
            state.sentMails=action.payload
        }
    }
})

export const {setComposeOpen, setSelectedMessage,setIsInbox, setIsSentBox, setAllMails, setInbox, setSentMails} = mailSlice.actions;
export default mailSlice.reducer