import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

const useAxios = (url) => {
  const [cards, setCards] = useState([]);

  const addCard = async (name) => {
    console.log('URL IS', url);
    console.log('GOT NAME', name);
    const targetUrl = name ? `${url}/${name}/` : url;
    console.log('TARGET IS', targetUrl);
    console.log(' OLD TARGET WAS: https://pokeapi.co/api/v2/pokemon/pikachu/');
    const response = await axios.get(targetUrl);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export default useAxios;
