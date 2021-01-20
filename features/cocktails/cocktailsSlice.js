import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const initialState = {
  cocktails: [],
  searchTerm: 'a',
  status: 'idle',
  error: null,
}

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async (_, { getState }) => {
    const response = await axios.get(url + getState().cocktails.searchTerm)
    return response.data.drinks
  }
)

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      if (action.payload) {
        const newCocktails = action.payload.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        state.cocktails = newCocktails
      } else {
        state.cocktails = []
      }
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const { setSearchTerm } = cocktailsSlice.actions
export default cocktailsSlice.reducer
