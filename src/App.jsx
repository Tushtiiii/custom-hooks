import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./hooks/Frontendfunctions.hooks";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function useFetch(url) {
    setLoading(true);
    try {
      const result = await fetchData(url);
      setData(result);
      console.log(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    useFetch("https://api.escuelajs.co/api/v1/products");
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="text-3xl font-bold center">Products </h1>
      <div className="grid">
        {data.map((product) => (
          <div key={product.id} className="card">
            <h2 className="title">{product.title}</h2>
            <img src={product.images} className="img"  />
            <h4>Price $ { product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
