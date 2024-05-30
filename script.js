let characterNumber = 1;
codeCharacter();

function codeCharacter() {
    characterNumber += 1; 
    const url = `https://swapi.dev/api/people/${characterNumber}/`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayCharacterData(data))
        .catch(error => console.error(error));
}

function displayCharacterData(data) {
    document.getElementById('character').innerHTML = `
        <h2>${data.name}</h2>
        <p>Height: ${data.height}</p>
        <p>Mass: ${data.mass}</p>
        <p>Hair Color: ${data.hair_color}</p>
        <p>Skin Color: ${data.skin_color}</p>
        <p>Eye Color: ${data.eye_color}</p>
        <p>Birth Year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>
    `;
}

document.getElementById('next').addEventListener('click', codeCharacter);