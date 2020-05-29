import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import profileReducer from "./profileReducers";
import adminReducer from "./adminReducers"
import psrSurveyReducer from "./psrSurveyReducers";
import pcrSurveyReducer from "./pcrSurveyReducers";
import pSurveyReducer from "./pSurveyReducers";

export default combineReducers({
  auth: authReducer,
  prof: profileReducer,
  admin: adminReducer,
  psrsurv: psrSurveyReducer,
  pcrsurv: pcrSurveyReducer,
  psurv: pSurveyReducer,
  errors: errorReducer
});
