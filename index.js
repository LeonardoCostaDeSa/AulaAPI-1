
/*
fetch("https://pokeapi.co/api/v2/pokemon/150")
.then((response) => response.json())
.then((data) => console.log(data.name))
*/
import axios from 'axios' 

axios.get("https://pokeapi.co/api/v2/pokemon/150")
.then((response) => console.log(response.data))