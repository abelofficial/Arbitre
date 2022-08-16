import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ConfigState {
  drawer: boolean;
}

// Define the initial state using that type
const initialState: ConfigState = {
  drawer: false,
};

export const configsSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    // Action to toggle between dark and light mode
    openDrawer: (state) => {
      state.drawer = true;
    },
    closeDrawer: (state) => {
      state.drawer = false;
    },
  },
});

export const { openDrawer, closeDrawer } = configsSlice.actions;

interface selectDrawerProps {
  configs: { drawer: boolean };
}
// Selectors
export const selectDrawer = (state: selectDrawerProps) => state.configs.drawer;

export default configsSlice.reducer;
