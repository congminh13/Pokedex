var input = document.getElementById('poke-find');

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {  
        let name = input.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.name);
                const pokeImg = document.querySelector("#poke-pic");
                pokeImg.setAttribute("src", data.sprites.other.dream_world.front_default);
                
                const rev = document.querySelector(".insight");
                rev.innerHTML = ''; 

                let s1 = ['Name: ', "Weight: ", 'Height: ', 'Type: ', 'Base experience: ', 'Abilities: '];
                let s2 = ['', 'kg', 'm', '', 'exp', ''];
                let sh = ['name', 'weight', 'height', 'types', 'base_experience', 'abilities'];

                for (let i in sh) {
                    let stat = document.createElement("div");
                    
                    if (sh[i] === 'types') {
                        let typesString = '';
                        for (let j = 0; j < data[sh[i]].length; j++) {
                            typesString += data[sh[i]][j].type.name + ', ';
                        }
                        typesString = typesString.slice(0, -2);
                        
                        stat.innerHTML = s1[i] + typesString + s2[i];
                    } else if (sh[i] === 'abilities') {
                        let typesString = '';
                        for (let j = 0; j < data[sh[i]].length; j++) {
                            typesString += data[sh[i]][j].ability.name + ', ';
                        }
                        typesString = typesString.slice(0, -2);
                        
                        stat.innerHTML = s1[i] + typesString + s2[i];
                    } else {
                        stat.innerHTML = s1[i] + data[sh[i]] + s2[i];
                    }
                    stat.classList.add("stat");
                    rev.appendChild(stat);
                    console.log(data[sh[i]]);
                }
            });
    }
});

console.log("memaybeo");
