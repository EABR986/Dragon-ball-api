import {characterFilter} from "../components/buttons/filterInfo.js";

const url ="https://dragon-ball-super-api.herokuapp.com/api/characters";


export const getData = async () => {
  
     const data = await fetch(url);
     const dataJSON = await data.json();
    characterFilter(dataJSON);
    
  
 };