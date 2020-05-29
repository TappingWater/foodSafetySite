import {
  PSRSURVEY_REQUESTED_SENT
} from '../actions/types';

const initialState = {
  profile: {}
}
export default function (state = initialState, action) {

  switch (action.type) {

    case PSRSURVEY_REQUESTED_SENT: {
      return {
        ...state,
        profile: action.payload
      };
    }

    default:
      return state;
  }

}
