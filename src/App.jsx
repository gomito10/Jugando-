import { useState,useRef } from 'react';
import './App.css';
const nombresMujeres = [
  "Ana", "María", "Sofía", "Laura", "Valentina","Isabella", "Camila", "Lucía", "Valeria", "Emma","Renata", "Catalina", "Florencia", "Abril", "Clara","Delfina", "Elena", "Gabriela", "Helena", "Inés","Olivia", "Paula", "Quintina", "Rocío", "Sara","Tatiana", "Úrsula", "Victoria", "Wanda", "Ximena","Yamila", "Zoe", "Adriana", "Beatriz", "Carolina","Daniela", "Estefanía", "Gisela", "Hilda", "Irene","Jazmín", "Karina", "Liliana", "Mónica", "Nadia","Olga", "Patricia", "Rebeca", "Silvia", "Teresa","Verónica", "Wendy", "Xenia", "Yolanda", "Zara"
 ];
const nombresHombres = [
    "Juan", "Pedro", "Carlos", "Luis", "Miguel", "Javier", "Andrés", "Fernando", "José", "Antonio",
    "Ricardo", "Alejandro", "Roberto", "Daniel", "Hugo", "Sergio", "Pablo", "Diego", "Manuel", "Jorge",
    "Raúl", "Alberto", "Gonzalo", "Eduardo", "Mario", "Francisco", "Emilio", "Gabriel", "Tomás", "Adrián",
    "Rafael", "Ignacio", "César", "Víctor", "Ángel", "Guillermo", "Marcos", "Benjamín", "Mateo", "Samuel",
    "Ismael", "Abel", "Bruno", "Nicolás", "Felipe", "Leonardo", "Esteban", "Joaquín", "René"
];
const peliculasHollywood = [
    "Los juegos del hambre: balada de pájaros cantores y serpientes",
    "Oppenheimer",
    "Fast X",
    "Five Nights at Freddy's",
    "Super Mario Bros.: la película",
    "Spider-Man: Across the Spider-Verse",
    "Transformers: el despertar de las bestias",
    "La Sirenita",
    "Elemental",
    "La monja 2",
    "The Equalizer 3",
    "El exorcista del Papa",
    "The Marvels",
    "Guardianes de la Galaxia vol. 3",
    "Misión imposible: sentencia mortal",
    "Trolls Band Together",
    "Blue Beetle",
    "Gran Turismo",
    "Rojo, blanco y sangre azul",
    "No Hard Feelings",
    "Beau tiene miedo",
    "You Are So Not Invited To My Bat Mitzvah",
    "Nimona",
    "Asteroid City",
    "The Exorcist: Believer",
    "Evil Dead Rise",
    "Saw X",
    "Knights of the Zodiac",
    "Air",
    "The Flash",
    "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    "Meg 2: The Trench",
    "Extraction 2",
    "Guy Ritchie's The Covenant",
    "Nyad",
    "El asesino",
    "Expend4bles",
    "The Last Voyage of the Demeter",
    "V/H/S/85",
    "After Everything",
    "El Rey Mono",
    "Renfield",
    "¿Estás ahí, Dios? Soy yo, Margaret",
    "Maravilloso desastre",
    "Ruby Gillman, Teenage Kraken",
    "A Haunting in Venice",
    "The Wonderful Story of Henry Sugar",
    "Misántropo",
    "Simón"
];
const superheroes = [
    "Superman", "Batman", "Wonder Woman", "Spider-Man", "Iron Man", "Captain America", "Thor",
    "Hulk", "Black Widow", "Black Panther", "Aquaman", "Flash", "Green Lantern", "Doctor Strange",
    "Wolverine", "Deadpool", "Green Arrow", "Ant-Man", "Cyborg", "Supergirl", "Shazam", "Hawkeye",
    "Vision", "Scarlet Witch", "Star-Lord", "Groot", "Rocket Raccoon", "Gamora", "Drax", "Captain Marvel",
    "Daredevil", "Luke Cage", "Jessica Jones", "Iron Fist", "Hawkgirl", "Martian Manhunter", "Swamp Thing",
    "Zatanna", "Nightwing", "Red Hood", "Spawn", "Blade", "Ghost Rider", "Hellboy", "Spawn"
];
const deportes = [
  "Fútbol",
  "Baloncesto",
  "Tenis",
  "Golf",
  "Atletismo",
  "Natación",
  "Ciclismo",
  "Rugby",
  "Voleibol",
  "Béisbol",
  "Hockey sobre hielo",
  "Críquet",
  "Boxeo",
  "Esgrima",
  "Gimnasia",
  "Surf",
  "Snowboard",
  "Esquí alpino",
  "Motocross",
  "Lucha libre",
  "Karate",
  "Taekwondo",
  "Judo",
  "Polo acuático",
  "Bádminton",
  "Ajedrez",
  "Pentatlón moderno",
  "Triatlón",
  "Halterofilia",
  "Bolos",
  "Billar",
  "Dardos",
  "Curling",
  "Rally",
  "Motociclismo",
  "Vela",
  "Equitación",
  "Patinaje sobre ruedas",
  "Bobsleigh",
  "Skeleton",
  // Agrega más deportes aquí...
];
const animales = [
    "perro", "gato", "elefante", "jirafa", "tigre", "león",
    "oso", "conejo", "ratón", "pájaro", "serpiente", "cocodrilo",
    "hipopótamo", "pingüino", "delfín", "ballena", "ardilla",
    "canguro", "rinoceronte", "murciélago", "camello", "cebra",
    "gallina", "pato", "pavo", "águila", "loro", "tortuga",
    "tiburón", "abeja", "hormiga", "araña", "escarabajo",
    "gusano", "medusa", "pulpo", "cangrejo", "sapo", "rana",
    "lagarto", "iguana", "avestruz", "ciervo", "oso panda",
    "koala", "panda rojo", "puma", "lobo", "zorro", "castor",
    "morsa", "nutria", "armadillo", "mapache", "hipopótamo"
];
const colores = [
    "rojo", "anaranjado", "amarillo", "azul", "verde", "negro",
    "rosa", "morado", "marrón", "gris", "blanco", "turquesa",
    "violeta", "celeste", "cian", "beige", "salmon", "dorado",
    "plateado", "verde oliva", "lavanda", "amarillo mostaza",
    "chocolate", "turquesa", "coral", "esmeralda", "fucsia",
    "gris perla", "verde lima", "naranja", "púrpura", "teal"
];
const equiposArgentinos = [
    "Boca Juniors", "River Plate", "Independiente", "Racing Club",
    "San Lorenzo", "Newell's Old Boys", "Rosario Central", "Estudiantes",
    "Vélez Sarsfield", "Huracán", "Lanús", "Banfield",
    "Gimnasia y Esgrima La Plata", "Talleres", "Colón", "Unión",
    "Argentinos Juniors", "Godoy Cruz", "Central Córdoba", "Aldosivi",
    "Defensa y Justicia", "Patronato", "Atlético Tucumán", "Arsenal",
    "Gimnasia y Tiro", "Belgrano", "Chacarita Juniors", "Quilmes",
    "Ferro Carril Oeste", "All Boys", "San Martín de San Juan",
    "Olimpo", "Temperley", "Sarmiento", "Instituto",
    "Atlético Rafaela", "Nueva Chicago", "Platense", "Los Andes",
    "Brown de Adrogué", "Almagro", "Deportivo Morón", "Estudiantes de Caseros",
    "Villa Dálmine", "Flandria", "Defensores de Belgrano", "Tristán Suárez",
    "Acassuso", "Deportivo Español", "Comunicaciones", "Colegiales",
    "UAI Urquiza", "San Telmo", "Barracas Central", "Sacachispas"
];
const equiposFutbol = [
    "Real Madrid", "Barcelona", "Atlético de Madrid", "Valencia",
    "Sevilla", "Villarreal", "Real Sociedad", "Athletic Bilbao",
    "Real Betis", "Celta de Vigo", "Espanyol", "Getafe",
    "Levante", "Granada", "Osasuna", "Alavés",
    "Eibar", "Valladolid", "Mallorca", "Huesca",
    "Elche", "Rayo Vallecano", "Cádiz", "Real Zaragoza",
    "Deportivo La Coruña", "Málaga", "Las Palmas", "Real Oviedo",
    "Sporting de Gijón", "Tenerife", "Almería", "Numancia",
    "Leganés", "Girona", "Albacete", "Córdoba",
    "Lugo", "Mirandés", "Ponferradina", "Racing de Santander",
    "Zaragoza", "Mallorca", "Oviedo", "Tenerife",
    "Alcorcón", "Fuenlabrada", "Ponferradina", "Las Palmas",
    "Girona", "Leganés", "Rayo Vallecano", "Málaga"
];
const futbolistas = [
    "Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé",
    "Sergio Ramos", "Luis Suárez", "Karim Benzema", "Robert Lewandowski",
    "Mohamed Salah", "Virgil van Dijk", "Kevin De Bruyne", "Sadio Mané",
    "Harry Kane", "Raheem Sterling", "Eden Hazard", "Antoine Griezmann",
    "Paul Pogba", "Gareth Bale", "Marco Reus", "Thiago Alcántara",
    "Toni Kroos", "Sergio Agüero", "Ángel Di María", "Jordi Alba",
    "Gerard Piqué", "Andrés Iniesta", "Xavi Hernández", "Iker Casillas",
    "David de Gea", "Dani Carvajal", "Sergio Busquets", "Isco",
    "Diego Godín", "Edinson Cavani", "Luka Modrić", "Ivan Rakitić",
    "Zlatan Ibrahimović", "Paulo Dybala", "Thibaut Courtois",
    "Romelu Lukaku", "Thomas Müller", "Manuel Neuer", "James Rodríguez",
    "Alexis Sánchez", "Arturo Vidal", "Radamel Falcao", "Diego Costa",
    "Marcelo Vieira", "Philippe Coutinho", "Roberto Firmino",
    "Gabriel Jesús", "Alisson Becker", "Fernandinho", "Miralem Pjanić",
    "Dries Mertens", "Kalidou Koulibaly", "Hakim Ziyech", "Bruno Fernandes"
];
const personajesSimpsons = [
    "Homero Simpson", "Marge Simpson", "Bart Simpson", "Lisa Simpson",
    "Maggie Simpson", "Ned Flanders", "Apu Nahasapeemapetilon",
    "Montgomery Burns", "Waylon Smithers", "Krusty el Payaso",
    "Milhouse Van Houten", "Ralph Wiggum", "Nelson Muntz",
    "Lenny Leonard", "Carl Carlson", "Moe Szyslak", "Barney Gumble",
    "Seymour Skinner", "Edna Krabappel", "Patty Bouvier", "Selma Bouvier",
    "Troy McClure", "Lionel Hutz", "Dr. Nick Riviera", "Kent Brockman",
    "Groundskeeper Willie", "Sideshow Bob", "Snake Jailbird",
    "Kang y Kodos", "Disco Stu", "Bumblebee Man", "Comic Book Guy",
    "Hans Moleman", "Professor Frink", "Chief Wiggum", "Rainer Wolfcastle",
    "Duffman", "Gil Gunderson", "Luann Van Houten", "Maude Flanders",
    "Rod Flanders", "Todd Flanders", "Sherri y Terri", "Jimbo Jones",
    "Dolph Starbeam", "Kearney Zzyzwicz", "Agnes Skinner", "Cletus Spuckler"
];
const peliculasArgentinas = [
    "El secreto de sus ojos", "Nueve reinas", "Relatos salvajes",
    "El hijo de la novia", "El ciudadano ilustre", "El aura",
    "Carancho", "El abrazo partido", "El clan", "El secreto de la última luna",
    "Rosaura a las 10", "El hijo", "El día que me amen", "El mismo amor, la misma lluvia",
    "El lado oscuro del corazón", "El último Elvis", "El bonaerense",
    "El hijo de la novia", "El hijo de la novia"];
const lista=[nombresHombres,nombresMujeres,peliculasHollywood,superheroes,deportes,colores,animales, equiposArgentinos, equiposFutbol, futbolistas, personajesSimpsons, peliculasArgentinas];
const select=lista[Math.floor(Math.random()*lista.length)];
const word=select[Math.floor(Math.random()*select.length)].toLowerCase();
const letter=word.split("");
function App() {
  const[input,setInput]=useState("");
  const[letras,setLetras]=useState([]);
  const[vidas,setVidas]=useState(5);
  const[response,setResponse]=useState("");
  const[help,setHelp]=useState("");
  const[puntos,setPuntos]=useState(0);
  const[count,setCount]=useState(0);
  

  /*const[guardar,setGuardar]=useState(letter.map((names)=>{
     return  names!=letras ? names.replaceAll(names,"_ ") : names}));*/
  function handleClick(){
  if(letter.includes(input) && !letras.includes(input)){
    setLetras([...letras,input]);
    
  
  
  }else{
    setVidas(vidas-1);
  }
  setInput("");
  
}
function handleResponse(){
  setResponse(word)
}
function handleHelp(){
  if(select==lista[0]){
    setHelp("Es el nombre de un hombre")
  }else if(select==lista[1]){
    setHelp("Es el nombre de una mujer");
  }else if(select==lista[2]){
    setHelp("Es el nombre de una película de Hollywood");
  }else if(select==lista[3]){
    setHelp("Es el nombre de un super Héroe")
  }else if(select==lista[4]){
    setHelp("Es el nombre de un deporte")
  }else if(select==lista[5]){
    setHelp("Es el nombre de un color")
  }else if(select==lista[6]){
    setHelp("Es el nombre de un animal")
  }else if(select==lista[7]){
    setHelp("Es el nombre de un equipo de fútbol argentino")
  }else if(select==lista[8]){
    setHelp("Es el nombre de un equipo de fútbol español")
  }else if(select==lista[9]){
    setHelp("Es el nombre de un futbolista")
  }else if(select==lista[10]){
    setHelp("Es un personaje de los Simpsons")
  }else if(select==lista[11]){
    setHelp("Es el nombre de una película Argentina")
  }
}
function handleClose(){
  window.onbeforeunload = (event) => {
    const confirmationMessage = "¿Estás seguro de que deseas abandonar la página?";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
};

}
const unir=letter.join(" ");
  return (
    <>
    <div>
    <h1>Juego del ahorcado</h1>
    <h1>Puntos: {puntos}</h1>
    <div style={vidas < 1 ? {display:"none"} : {display:"block"}}>
    <h1>{vidas}</h1>
    <h2>{letter.length}</h2>
      <h3 id="guion">{letter.map((person)=>{
      if(letras.includes(person) && person != " "){ 
      return person
      
      }else if(person == " "){
        return <span className="mx-2"></span>;
      }else{
        return "_ ";
        
      }
           
      })}

      </h3>
      <div>
      <input type="text" value={input} onInput={(e)=>setInput(e.target.value)} className="form-control w-25 text-center float-start"/>
       <button className="btn btn-info" type="button" onClick={handleClick}>click</button>
       <button type="button" onClick={handleResponse} className="btn btn-warning mx-2">Respuesta</button>
       <button type="button" onClick={handleHelp} className="btn btn-primary my-2 mx-2">Ayuda</button>
      </div>
      <p>{help}</p>
     </div>
     <div style={vidas < 1 ? {display:"block"} : {display:"none"}}>
     <h1 style={{color:"red"}}>{vidas < 1 ? "Perdiste" : "Ganaste"}<br/>{word}</h1>
     <button type="button" onClick={()=>location.reload()} className="text-bg-warning">Jugar de nuevo</button>
     </div>

     <h1 style={{color:"green"}}>{response}</h1>
     <p>{letter.join("").length}</p>
     <p>{letter.length}</p>
     <button type="button" onClick={handleClose}>cerrar</button>
     <p>maru</p>        
     </div>
     </>
  )
}

export default App;
