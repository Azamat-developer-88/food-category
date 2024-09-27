import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API dan taomlar kategoriyasini olish
export const fetchCategories = createAsyncThunk('meals/fetchCategories', async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  return data.categories;
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    categories: [],
    selectedCategory: null,  // Yakka kategoriya uchun state qo'shildi
    loading: false,
    error: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;  // Yakka kategoriya tanlanadi
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = null;  // Kategoriya tozalanadi
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { selectCategory, clearSelectedCategory } = mealsSlice.actions;
export default mealsSlice.reducer;
