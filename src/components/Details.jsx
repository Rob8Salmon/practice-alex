import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [data, setData] = useState({});
  const { pokemon } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>Here's the deets!</h1>
      <h2>{pokemon}</h2>
      <h3>Name: {data.name}</h3>
      <h3>ID: {data.id}</h3>
      <img src={data.sprites?.front_default} alt="" />
    </div>
  );
};

export default Details;
