import React, { useEffect, useLayoutEffect, useState } from "react";

const PracticeUseEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fatching data", error));
  }, []);
  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading ......</p>
      )}
    </div>
  );
};

export default PracticeUseEffect;
