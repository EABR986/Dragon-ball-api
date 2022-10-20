import { characterCard } from "../characterCard";
import { handlerButtons } from "./handlerButtons";


export const characterFilter = (array) => {
  const erase=()=>{
    const containerApp = document.getElementById("container-app");
    containerApp.innerHTML=""};
  const filteredCharacter = (search) => {
    return array.filter((character) => character.specie === search);
  };

  const all = () => {
    const all = array;
    erase();
    characterCard(all);
  };
  const angels = () => {
    const angels = filteredCharacter("Angel");
    erase();
    characterCard(angels);
  };
  const humans = () => {
    const humans = filteredCharacter("Humano");
    erase();
    characterCard(humans);
  };
  const saiyans = () => {
    const saiyans = filteredCharacter("Saiyan");
    erase();
    characterCard(saiyans);
  };
  const fusion = () => {
    const fusion = filteredCharacter("Fusion");
    erase();
    characterCard(fusion);
  };
  const namekians = () => {
    const namekians = filteredCharacter("Namekiano");
    erase();
    characterCard(namekians);
  };
  const mestizos = () => {
    const mestizos = filteredCharacter("Saiyan mestizo");
    erase();
    characterCard(mestizos);
  };
  const ciborgs = () => {
    const ciborgs = filteredCharacter("Ciborg");
    erase();
    characterCard(ciborgs);
  };
  const aleatorios = () => {
    const numberRandom = Math.floor(Math.random() * array.length);
    const personajeAleatorio = array.filter(
      (character) => character.id === numberRandom
    );
    erase();
    characterCard(personajeAleatorio);
  };
  const eraseAll = () => {
    erase();
  };
  const containerButtons = document.getElementById("container-button");
  containerButtons.addEventListener("click", (e) => {
handlerButtons(e,all,angels,humans,saiyans,fusion,namekians,mestizos,ciborgs,aleatorios,eraseAll)

  });
};
