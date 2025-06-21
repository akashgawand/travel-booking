    import {createSlice} from '@reduxjs/toolkit';

    const initialState={
        selectedLocation:"",
    }

    const locationSlice=createSlice({
        name:"location",
        initialState,
        reducers:{
            setSelectedLocation:(state,action)=>{
                state.selectedLocation=action.payload;
            }
        }
        
    })

    export const {setSelectedLocation} = locationSlice.actions;
    export default locationSlice.reducer; 