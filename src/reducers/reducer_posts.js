import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

                              //vvv Were converting the list to an object!
export default function(state = {}, action){
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
