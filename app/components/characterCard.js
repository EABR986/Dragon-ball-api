export const characterCard= (array)=> {
    const containerApp = document.getElementById("container-app");
         array.forEach((character) => {
          const div = document.createElement("div");
          div.classList.add("character-card");
          const name= character.name; 
          const specie = character.specie;
          const universe = character.universe;
          const imageUrl = character.imageUrl;
          div.innerHTML = `
    
          <p> Character:${name} || Species: ${specie}</p>
          <img class="img-character" src="${imageUrl}" alt="${name}">
          <h2> Universe:${universe}</h2>
          `;
        containerApp.append(div)
        
        });
      };
