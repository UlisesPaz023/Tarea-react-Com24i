import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../card/Card';

const Main = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async () => {
    const urlBase = process.env.REACT_APP_URL_API;
    try {      
      const {data} = await axios.get(`${urlBase}`);
      setCharacter(data.results);
    } catch (error) {
      alert('Ha ocurrido un problema.');
    }
  };

  return(
    <div className='container'>
      <div className='row my-5 justify-content-center'>
        {
          characters.map((char, i)=>(<Card char={char}/>))
        }
      </div>
    </div>
  )
}

export default Main;