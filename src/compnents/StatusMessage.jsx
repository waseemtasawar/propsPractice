import React from "react";

const StatusMessage = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? <p>LoggeddIn</p> : <p>LoggedOut</p>}</div>;
};

export default StatusMessage;
{
}
