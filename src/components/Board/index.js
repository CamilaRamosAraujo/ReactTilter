import React, { useState, useEffect } from "react";
import "./Board.css";
import themoviedb from "../../api/themoviedb";

function Board() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await themoviedb.get("/3/list/7108348?language=pt-BR");
        setData(response.data);
      } catch (error) {
        console.error("ops! i did again! " + error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="AppBoard">
      <header className="App-headerBoard">
        <div className="listaCarregada">
          {data && <p>{data["description"]}</p>}
          <ul>
            {data.items?.map(({ id, title }) => {
              return <li key={id}>{title}</li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Board;