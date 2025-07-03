import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { fetchData } from "./components/useFetch";

function App() {


  const { data, loading, error } = fetchData("https://api.example.com/data");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 class="text-3xl font-bold center" >Products </h1>
      <FontAwesomeIcon icon={"faWhatsapp"} />
      <div className="grid">
        {data.map((product) => (
          <div key={product.id} className="card">
            <h2 className="title">{product.title}</h2>
            <img src={product.images[0]} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
