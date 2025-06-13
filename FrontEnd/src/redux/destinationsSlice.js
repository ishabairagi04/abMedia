import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [
    {
      name: 'JAMMU & KASHMIR',
      price: '₹4999/-',
      image: '\img.jpg',
    },
    {
      name: 'HIMACHAL PRADESH',
      price: '₹4999/-',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Himachal_Pradesh.jpg',
    },
    {
      name: 'GOA',
      price: '₹4999/-',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Goa_beach.jpg',
    },
    {
      name: 'ASSAM',
      price: '₹4999/-',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Tea_Gardens%2C_Assam.jpg',
    },
    {
      name: 'MAHARASHTRA',
      price: '₹4999/-',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Maharashtra_western_ghats.jpg',
    },
    {
      name: 'KERELA',
      price: '₹4999/-',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Backwaters_in_Kerala.jpg',
    },
  ],
};

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {},
});

export const selectDestinations = (state) => state.destinations.destinations;
export default destinationsSlice.reducer;
