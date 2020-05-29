import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  PSRSURVEY_REQUESTED_SENT,
  PCRSURVEY_REQUESTED_SENT,
  PSURVEY_REQUESTED_SENT
} from "./types";

// Get PSR Survey Data of User
export const getPSRSurvey = () => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  const decoded = jwt_decode(token);
  axios
    .get("/api/psrsurveys/" + decoded.id,
    {
      params: {
        token: decoded.id
      }
    })
    .then(res => {
      dispatch({
        type: PSRSURVEY_REQUESTED_SENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};

// Send PSR Survey Data of User
export const sendPSRSurvey = (surveyData) => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  const decoded = jwt_decode(token);
  surveyData.userID = decoded.id;
  axios
    .post("/api/psrsurveys/add", surveyData)
    .then(res => {
      console.log("Success!");
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};

// Get PCR Survey Data of User
export const getPCRSurvey = () => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  const decoded = jwt_decode(token);
  axios
    .get("/api/pcrsurveys/" + decoded.id,
    {
      params: {
        token: decoded.id
      }
    })
    .then(res => {
      dispatch({
        type: PCRSURVEY_REQUESTED_SENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};

// Send PCR Survey Data of User
export const sendPCRSurvey = (surveyData) => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  const decoded = jwt_decode(token);
  surveyData.userID = decoded.id;
  axios
    .post("/api/pcrsurveys/add", surveyData)
    .then(res => {
      console.log("Success!");
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};

// Get PSR Survey Data of User
export const getPSurvey = () => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  const decoded = jwt_decode(token);
  axios
    .get("/api/psurveys/" + decoded.id,
    {
      params: {
        token: decoded.id
      }
    })
    .then(res => {
      dispatch({
        type: PSURVEY_REQUESTED_SENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};

// Send PSR Survey Data of User
export const sendPSurvey = (surveyData) => dispatch => {
  const token = localStorage.getItem('jwtToken').split(" ")[1];
  const decoded = jwt_decode(token);
  surveyData.userID = decoded.id;
  axios
    .post("/api/psurveys/add", surveyData)
    .then(res => {
      console.log("Success!");
    })
    .catch(err => {
      console.log(err.message);
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      })}
    );
};
