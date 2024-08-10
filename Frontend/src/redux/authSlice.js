// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Function to save state to local storage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('authState', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
};

// Function to load state from local storage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('Could not load state', e);
    return initialState;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: loadStateFromLocalStorage(),
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      saveStateToLocalStorage(state);
     // console.log('loginSuccess: token is', state.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      saveStateToLocalStorage(state);
    //  console.log('logout: token is', state.token);
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;