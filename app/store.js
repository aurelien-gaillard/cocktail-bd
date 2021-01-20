import { configureStore } from '@reduxjs/toolkit'
import cocktailsReducer from '../features/cocktails/cocktailsSlice'
import singleCocktailReducer from '../features/singlecocktail/singleCocktailSlice'

const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
    singleCocktail: singleCocktailReducer,
  },
})

export default store
