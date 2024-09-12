import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loginWithEmail = createAsyncThunk(
    "user/loginWithEmail",
    async ({ email, password }, { rejectWithValue }) => {}
);

export const loginWithGoogle = createAsyncThunk(
    "user/loginWithGoogle",
    async (token, { rejectWithValue }) => {}
);

export const logout = () => (dispatch) => {

};

const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        loginError: null,
        success: false,
    },
    reducers: {
        clearErrors: (state) => {
            state.loginError = null;
            state.registrationError = null;
        },
    },
    extraReducers: (builder) => {},
});
export const { clearErrors } = UserSlice.actions;
export default UserSlice.reducer;