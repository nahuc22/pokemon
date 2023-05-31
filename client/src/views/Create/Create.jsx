import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postPokemon } from '../../redux/Actions'


const Create = () => {

  const [input, setInput] = useState({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      type: [],
  })
  const [errors, setErrors] = useState({
    name: 'Name es requerido',
    hp: 'Hp es requerido',
    attack: 'Attack es requerido',
    type: ''
  })
  
  const dispatch = useDispatch();
  // const types = useSelector((state) => state.Types);

  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false
      else{
        disabled = true
        break;
      }
    }
    return disabled;
  }

  const validate = (input , name) => {
    if (name === "name"){

      if(input.name !== "") setErrors({...errors, name: ''}) 
      else  setErrors({...errors, name: 'Name es requerido'}) 
      return

    } else if (name === "hp"){

      if (input.hp !== "") setErrors({...errors, hp: ''})
      else setErrors({...errors, hp: 'Hp es requerido'})
      return

    } else if (name === "attack"){

      if (input.attack !== "") setErrors({...errors, attack: ''})
      else setErrors({...errors, attack: 'Attack es requerido'})
      return
    }
  }

  function handleSelect(event) {
    setInput({
      ...input,
      type: [...input.type, event.target.value],
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postPokemon(input))
  }

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    validate({
      ...input,
      [event.target.name]: event.target.value} 
      , event.target.name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        { console.log(input)}
        { console.log(errors)}
        <div>
        <label>Name: </label>
            <input name='name' type="text"  value={input.name} onChange={handleChange}></input>
            {errors.name}
        </div>
        <div>
        <label>Attack: </label>
            <input name="attack"  type="number" value={input.attack} onChange={handleChange}></input>
            {errors.attack}
        </div>
        <div>
        <label>Hp: </label>
            <input name="hp" type="number" value={input.hp} onChange={handleChange}></input>
            {errors.hp}
        </div>
        <div>
            <label>Defense:</label>
            <input
              type="number"
              value={input.defense}
              name="defense"
              onChange={handleChange}
            />
            {errors.defense}
          </div>
          <div>
            <label>Speed:</label>
            <input
              type="number"
              value={input.speed}
              name="speed"
              onChange={handleChange}
            />
            {errors.speed}
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={input.height}
              name="height"
              onChange={handleChange}
            />
            {errors.height}
          </div>
          <div>
            <label>Weight:</label>
            <input
              type="number"
              value={input.weight}
              name="weight"
              onChange={handleChange}
            />
            {errors.weight}
          </div>
          <div>
            <label>Image:</label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={handleChange}
            />
            {errors.image}
          </div>
          {/* <div>
            <select onChange={handleSelect}>
              <label>Types:</label>
              {types.map((type) => (
                <option value={type.name}>{type.name}</option>
              ))}
            </select>
            <ul>
              <il>{input.type.map((ty) => ty + " ,")}</il>
            </ul>
            {errors.type}
          </div> */}
        <input disabled={disable()} type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default Create