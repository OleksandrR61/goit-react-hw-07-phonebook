import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const handleFulfilled = (state,) => {
    state.isUpdated = true;
};

const handleRejected = (state, { payload }) => {
    state.error = payload;
    state.isUpdated = false;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: true,
        error: null,
        isUpdated: true,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.isLoading = false;
                state.error = null;
                state.isUpdated = false;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
                state.isUpdated = false;
            })
            .addCase(addContact.fulfilled, handleFulfilled)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.fulfilled, handleFulfilled)
            .addCase(deleteContact.rejected, handleRejected)
            .addDefaultCase((state) => state);
    },
});

export const contactsReducer = contactsSlice.reducer;