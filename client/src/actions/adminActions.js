import axios from "axios";
import {
    GET_ERRORS,
    FOOD_REQUESTED_SUCCEEDED,
    UPDATE_FOOD,
    ADD_FOOD,
    DELETE_FOOD
} from "./types";



// GET Food Info for table
export const getFood = () => dispatch => {
    axios
        .get("/api/foods/",
            {})
        .then(res => {
            console.log("Trying to get food");
            dispatch({
                type: FOOD_REQUESTED_SUCCEEDED,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            })
        }
        );
};

// ADD Food Item
export const addItem = (foodItem, history) => dispatch => {
    axios
        .post("/api/foods/add", foodItem)
        .then(res => {
            console.log("Success!");
            dispatch({
                type: ADD_FOOD
            })
        })
        .catch(err => {
            console.log(err.message);
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            })
        }
        );
};

// DELETE Food Item
export const deleteItem = (foodItem) => dispatch => {
    axios
        .delete("/api/foods/delete/" + foodItem.name, foodItem)
        .then(res => {
            console.log("Success!");
        })
        .catch(err => {
            console.log(err.message);
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            })
        }
        );
};

// CHANGE Item Info
export const updateItem = (newFoodData, history) => dispatch => {
    axios
        .patch("/api/foods/update/" + newFoodData.name, newFoodData)
        .then(res => {
            history.push("/foods/");
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.message
            })
        }
        );
}
