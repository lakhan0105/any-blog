import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Client, Databases, Storage, ID, Query } from "appwrite";
import conf from "../../conf/conf";
import { toast } from "react-toastify";

const client = new Client()
  .setEndpoint(conf.appwriteEndpoint) // Your API Endpoint
  .setProject(conf.projectId); // Your project ID
const databases = new Databases(client);

const storage = new Storage(client);

const initialState = {
  isLoading: false,
  blogs: null,
  totalBlogs: "",
  //   currImgObj: {},
};

export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (blogObj, thunkAPI) => {
    try {
      const resp = await databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        ID.unique(),
        blogObj
      );
      //   console.log(resp);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createFeaturedImage = createAsyncThunk(
  "blog/createFeaturedImage",
  async (fileId, thunkAPI) => {
    try {
      const resp = await storage.createFile(
        conf.bucketId,
        fileId,
        document.getElementById("uploader").files[0]
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllFeaturedImages = createAsyncThunk(
  "blog/getAllFeaturedImages",
  async (_, thunkAPI) => {
    try {
      const resp = await storage.listFiles(conf.bucketId);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogImgPreview = (fileId) => {
  try {
    const imgObj = storage.getFilePreview(conf.bucketId, fileId);
    return imgObj;
  } catch (error) {
    console.log(error);
  }
};

export const getAllBlogs = createAsyncThunk(
  "blog/getAllBlogs",
  async (_, thunkAPI) => {
    try {
      const resp = await databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        [Query.equal("status", [true])]
      );
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(createBlog.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        toast.error(payload);
      })
      .addCase(createFeaturedImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFeaturedImage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(createFeaturedImage.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getAllFeaturedImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFeaturedImages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      })
      .addCase(getAllFeaturedImages.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.blogs = payload.documents;
        state.totalBlogs = payload.total;
      })
      .addCase(getAllBlogs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

// export
// export const { showBlogImgPreview } = blogSlice.actions;
export default blogSlice.reducer;
