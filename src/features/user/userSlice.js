import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import conf from "../../conf/conf";
import { Client, Account, ID } from "appwrite";
import { toast } from "react-toastify";
import { getUserLS, removeUserLS, setUserLS } from "../../utils/localStorage";

const client = new Client()
  .setEndpoint(conf.appwriteEndpoint)
  .setProject(conf.projectId);
const account = new Account(client);

// initial state
const initialState = {
  isLoading: false,
  user: getUserLS(),
};

// signup/createUser
export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, thunkAPI) => {
    const { userId, name, email, password } = user;
    try {
      const resp = await account.create(userId, email, password, name);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// loginUser
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    const { email, password } = user;
    try {
      const resp = await account.createEmailPasswordSession(email, password);
      thunkAPI.dispatch(currentUser());
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// getUser
export const currentUser = createAsyncThunk(
  "user/currentUser",
  async (_, thunkAPI) => {
    try {
      const resp = await account.get();
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// logout
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      const resp = await account.deleteSessions();
      return resp;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      // state.user = null;
      return null;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        toast.success("created");
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("logged in");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.user = payload;
        setUserLS(payload);
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.user = payload;
        console.log(payload);
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        removeUserLS();
        toast.success("logged out");
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logout } = userSlice.reducer;
export default userSlice.reducer;
