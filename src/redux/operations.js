import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      console.log("Making API call...");
      const { data } = await api.get("/");
      console.log(data);
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
