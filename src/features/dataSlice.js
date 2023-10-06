import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 5500,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => ({ ...state, apiData: action.payload }),
        incrementId: (state) => ({ ...state, objectId: state.objectId + 1 }),
        decrementId: (state) => ({ ...state, objectId: state.objectId - 1 }),
        customId: (state, action) => ({ ...state, objectId: action.payload }),
        clearData: () => initialState
    }
})

export const { setData, incrementId, decrementId, customId, clearData } = dataSlice.actions

export default dataSlice.reducer