import React, { useEffect, useState } from "react";

const PracticeUseEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading ......</p>
      )}
    </div>
  );
};

export default PracticeUseEffect;
