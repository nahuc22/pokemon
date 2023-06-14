import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, postPokemon, getTypes } from "../../redux/Actions";
import style from "../../views/Create/Create.module.css";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [input, setInput] = useState({
    name: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    img: "",
    type: [],
  });
  const [errors, setErrors] = useState({
    name: "Name is required",
    life: "Life is required",
    attack: "Attack is required",
    defense: "Defense is required",
    img: "Image is required",
    type: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  
  const validate = (input, name) => {
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Name es requerido" });
      return;
    } else if (name === "life") {
      if (input.life !== "") setErrors({ ...errors, life: "" });
      else setErrors({ ...errors, life: "life es requerido" });
      return;
    } else if (name === "attack") {
      if (input.attack !== "") setErrors({ ...errors, attack: "" });
      else setErrors({ ...errors, attack: "Attack es requerido" });
      return;     
    } else if (name === "defense") {
      if (input.defense !== "") setErrors({ ...errors, defense: "" });
      else setErrors({ ...errors, defense: "Defense es requerido" });
      return;
    } else if (name === "speed") {
      if (input.speed !== "") setErrors({ ...errors, speed: "" });
      else setErrors({ ...errors, speed: "Attack es requerido" });
      return;
    } else if (name === "weight") {
      if (input.weight !== "") setErrors({ ...errors, weight: "" });
      else setErrors({ ...errors, weight: "Attack es requerido" });
      return;
    } else if (name === "height") {
      if (input.height !== "") setErrors({ ...errors, height: "" });
      else setErrors({ ...errors, height: "Attack es requerido" });
      return;
    } else if (name === "img") {
      if (input.img !== "") setErrors({ ...errors, img: "" });
      else setErrors({ ...errors, img: "Imagen es requerido" });
      return;
    }

  };
  
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  function handleSelect(event) {
    setInput({
      ...input,
      type: [...input.type, event.target.value],
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(postPokemon(input));
      alert("The pokemon has been created successfully")
      history.push("/home")
    }
    catch {
      alert('Has been an error');
    }
    
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    validate(
      {
        ...input,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.h1}>Create tu pokemon!</h1>
        <div>
          <label className={style.label}>Name:</label>
          <input
            className={style.input}
            name="name"
            type="text"
            value={input.name}
            onChange={handleChange}
          ></input>
          <p className={style.p}>{errors.name}</p>

          <label className={style.label}>Attack:</label>
          <input
            className={style.input}
            name="attack"
            type="number"
            min = "0"
            value={input.attack}
            onChange={handleChange}
          ></input>
          <p className={style.p}>{errors.attack}</p>

          <label className={style.label}>Life:</label>
          <input
            className={style.input}
            name="life"
            type="number"
            value={input.life}
            onChange={handleChange}
          ></input>
          <p className={style.p}>{errors.life}</p>

          <label className={style.label}>Defense:</label>
          <input
            className={style.input}
            type="number"
            value={input.defense}
            name="defense"
            onChange={handleChange}
          />
          <p className={style.p}>{errors.defense}</p>

          <label className={style.label}>Speed:</label>
          <input
            className={style.input}
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
          />
          {errors.speed}

          <label className={style.label}>Height:</label>
          <input
            className={style.input}
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
          />
          {errors.height}

          <label className={style.label}>Weight:</label>
          <input
            className={style.input}
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
          />
          {errors.weight}

          <label className={style.label}>Image:</label>
          <input
            className={style.input}
            type="text"
            value={input.img}
            name="img"
            onChange={handleChange}
          />
          <p className={style.p}>{errors.img}</p>

          <label className={style.label}>Types:</label>
          <select className={style.select}onChange={handleSelect}>
              <option defaultValue="">Types</option>
            {types.map((type) => (
              <option name={type.name}>{type}</option>
            ))}
          </select>
        </div>
        <input className={style.inputSubmit}disabled={disable()} type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default Create;
