import {
    FOOD_REQUESTED_SUCCEEDED
} from '../actions/types';

const initialState = {
    foodList: []
}
export default function (state = initialState, action) {

    switch (action.type) {

        case FOOD_REQUESTED_SUCCEEDED: {
            return {
                ...state,
                foodList: action.payload
            };
        }

        default:
            return state;
    }

}
