import Add from './AddtoCartReducer';
import Delete from './Delete_from_cart';
import {combineReducers} from 'redux'
export const RootReducer = combineReducers({
  Addtocart:Add,
  Delete:Delete
  });