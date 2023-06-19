import { createSlice } from '@reduxjs/toolkit';

// État initial du compteur
const initialState = {
  value: 0,
};

// Création du slice pour le compteur
const counterSlice = createSlice({
  name: 'counter', // Nom du slice (utilisé dans le reducer)
  initialState, // État initial du slice
  reducers: {
    increment: (state, action) => {
      // Reducer pour l'action d'incrémentation
      state.value += action.payload; // Augmente la valeur du compteur avec la valeur du payload
    },
  },
});

// Export de l'action d'incrémentation
export const { increment } = counterSlice.actions;

// Export du reducer du slice
export default counterSlice.reducer;