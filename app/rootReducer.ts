import { combineReducers } from '@reduxjs/toolkit'
import cocktailsReducer from '../features/cocktails/cocktailsSlice'
import singleCocktailReducer from '../features/singlecocktail/singleCocktailSlice'

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  singleCocktail: singleCocktailReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
