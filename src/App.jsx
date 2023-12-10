import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const url = "https://reqres.in/api/users?page=2";
    let result = await fetch(url);
    result = await result.json();
    setData(result?.data);
  };
  const onSort = (val) => {
    let sort = [];
    if (val == "assendig") {
      sort = data
        .slice()
        .sort((a, b) => a.first_name.localeCompare(b.first_name));
      console.log(val);
    }
    if (val == "dessendig") {
      sort = data
        .slice()
        .sort((a, b) => b.first_name.localeCompare(a.first_name));
      console.log(val);
    }
    console.log(sort);
    setData(sort);
  };

  console.log(data);

  return (
    <div>
      <h2>Assending & Desending</h2>
      {data.length > 0 && data.map((item, i) => <h3>{item.first_name}</h3>)}
      <div>
        <button onClick={() => onSort("assendig")}>Assending</button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => onSort("dessendig")}
        >
          Dessending
        </button>
      </div>
    </div>
  );
}
