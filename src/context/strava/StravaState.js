import React, { useReducer } from "react";
import axios from "axios";
import stravaReducer from "./stravaReducer";
import StravaContext from "./stravaContext";
import { CHECK_AUTH } from "../types";

const StravaState = (props) => {
  const initialState = {
    authenticated: false,
  };

  const [state, dispatch] = useReducer(stravaReducer, initialState);

  // integrate with strava
  const integrateStrava = async (token, history) => {
    try {
      const res = await axios.post(
        `https://agile-retreat-42559.herokuapp.com//api/v1/auth?scope=read,activity:read_all,read_all&code=${token}`
      );
      // delayed to appear like its doing something and pushing
      setTimeout(() => {
        history.push("/dashboard");
      }, 1000);
      console.log(res);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // check if authentication is valid

  // disconnect strava

  return (
    <StravaContext.Provider
      value={{
        authenticated: state.authenticated,
        integrateStrava,
      }}
    >
      {props.children}
    </StravaContext.Provider>
  );
};

export default StravaState;
