import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/campers");
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilteredCampers = createAsyncThunk(
  "campers/getFilteredCampers",
  async (queryParams, thunkAPI) => {
    try {
      const filterByLocation = (location, campers) => {
        return campers.filter((camper) => {
          const campersLocation = camper.location.toLowerCase();
          return campersLocation.includes(location.toLowerCase());
        });
      };

      const filterByTransmission = (transmission, campers) => {
        return campers.filter((camper) => camper.transmission === transmission);
      };

      const { data } = await api.get(`/campers?${queryParams}`);

      if (queryParams.includes("location")) {
        const locationParams = new URLSearchParams(queryParams).get("location");
        return filterByLocation(locationParams, data.items);
      }

      if (queryParams.includes("transmission")) {
        const transmissionParam = new URLSearchParams(queryParams).get(
          "transmission"
        );
        data.items = filterByTransmission(transmissionParam, data.items);
      }

      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
