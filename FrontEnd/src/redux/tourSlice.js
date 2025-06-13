import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      title: "GOLDEN TEMPLE TOUR",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Golden_Temple%2C_Amritsar%2C_Punjab.jpg/800px-Golden_Temple%2C_Amritsar%2C_Punjab.jpg",
    },
    {
      id: 2,
      title: "AMAZING KERELA TOUR",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Backwaters_in_Kerala.jpg/800px-Backwaters_in_Kerala.jpg",
    },
    {
      id: 3,
      title: "KASHMIR HOLIDAY TOUR",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gulmarg_snow_view.jpg/800px-Gulmarg_snow_view.jpg",
    },
    {
      id: 4,
      title: "RAJASTHAN TOUR",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Hawa_Mahal_2011.jpg/800px-Hawa_Mahal_2011.jpg",
    },
    {
      id: 5,
      title: "TRIP TO GOA",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Candolim_Beach.jpg/800px-Candolim_Beach.jpg",
    },
    {
      id: 6,
      title: "NAINITAL ESCAPE",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nainital_lake.jpg/800px-Nainital_lake.jpg",
    },
  ],
};

const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
});

export default tourSlice.reducer;
