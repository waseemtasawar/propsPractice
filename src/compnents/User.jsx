import React from "react";

const User = ({ name, age, email }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>age: {age}</p>
      <p>E-mail: {email}</p>
    </div>
  );
};

export default User;
