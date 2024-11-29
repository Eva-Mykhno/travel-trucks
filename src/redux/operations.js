import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("");
      console.log("Fetched campers:", data);
      return data;
    } catch (error) {
      console.error("Error fetching campers:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
