import {
  PROFILE_REQUESTED_SUCCEEDED
} from '../actions/types';

const initialState = {
  profile: {}
}
export default function (state = initialState, action) {

  switch (action.type) {

    case PROFILE_REQUESTED_SUCCEEDED: {
      return {
        ...state,
        profile: action.payload
      };
    }

    default:
      return state;
  }

}
