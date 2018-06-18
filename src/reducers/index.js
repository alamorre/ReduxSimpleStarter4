import { combineReducers } from 'redux';
import PostsReducer form './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
