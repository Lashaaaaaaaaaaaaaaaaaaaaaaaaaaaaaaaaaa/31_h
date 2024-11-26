import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';


interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};


export const fetchCounterValue = createAsyncThunk('counter/fetchValue', async () => {
  const response = await new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: 9 }), 600)
  );
  return response.data;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounterValue.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCounterValue.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(fetchCounterValue.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
