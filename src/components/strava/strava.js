import React, { useContext } from "react";
import StravaContext from "../../context/strava/stravaContext";

const Strava = () => {
  const stravaContext = useContext(StravaContext);

  const { integrateStrava } = stravaContext;

  const stravaURL =
    "https://www.strava.com/oauth/authorize?client_id=47703&redirect_uri=http://localhost:3000/auth/strava/code&response_type=code&scope=activity:read_all,activity:write";

  return (
    <div>
      <div className='container card card__main--left'>
        Hello
        <a href={stravaURL} className='btn'>
          Integrate
        </a>
      </div>
    </div>
  );
};

export default Strava;
