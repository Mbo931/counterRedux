import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// État initial du compteur
const initialState = {
  value: 0,
};

// Fonction asynchrone pour incrémenter le compteur de manière asynchrone
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount ) => {
    // Effectuer une logique asynchrone ici (par exemple, un appel réseau ou une requête API)
    // Ici, nous attendons simplement une seconde avant d'effectuer l'incrémentation
    await new Promise(resolve => setTimeout(resolve, 1000));

    return amount; // Retourne la quantité (amount) passée à l'action
  }
);

// Création du slice pour le compteur
const counterSlice = createSlice({
  name: 'counter', // Nom du slice (utilisé dans le reducer)
  initialState, // État initial du slice
  reducers: {
    increment: (state, action) => {
      state.value += action.payload; // Incrémente la valeur du compteur
      state.incrementedValue = action.payload; // Stocke la valeur incrémentée
    },
  },
  extraReducers: builder => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      // Reducer pour l'action d'incrémentation asynchrone réussie
      state.value += action.payload; // Augmente la valeur du compteur avec la valeur du payload
      state.incrementedValue = action.payload; // Stocke la valeur incrémentée

    });
  },
});

// Export de l'action d'incrémentation
export const { increment } = counterSlice.actions;

// Export du reducer du slice
export default counterSlice.reducer;
