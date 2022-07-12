import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployeeData = createAsyncThunk(
  'app/getEmployeeList',
  async () => {
    try {
      const { data } = await axios.get('https://dt-interviews.appspot.com/');

      return data;
    } catch (err) {
      // TODO: handling error notification
      console.log(err);

      return [];
    }
  }
);
