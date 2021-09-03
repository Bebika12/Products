import { combineReducers } from 'redux';
import articles from './product_reducer';

const rootReducer = combineReducers({
    articles
})

export default rootReducer;