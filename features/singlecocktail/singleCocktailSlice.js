import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const initialState = {
  cocktail: null,
  status: 'idle',
  error: null,
}

export const fetchSingleCocktail = createAsyncThunk(
  'singleCocktail/fetchSingleCocktail',
  async (id) => {
    const response = await axios.get(url + id)
    return response.data.drinks[0]
  }
)

const singleCocktailSlice = createSlice({
  name: 'singleCocktail',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleCocktail.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      if (action.payload) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = action.payload
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        state.cocktail = newCocktail
      } else {
        state.cocktail = null
      }
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

// export const { setSearchTerm } = cocktailsSlice.actions
export default singleCocktailSlice.reducer
