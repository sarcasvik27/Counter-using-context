import {createStore} from 'redux'
import { RootReducer } from './Redux/Reducers/Rootreducer'
const store = createStore(RootReducer)
 export {store}