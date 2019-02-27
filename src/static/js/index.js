let moviesZone    = document.querySelector('.movies-zone');
let planetsZone   = document.querySelector('.planets-zone');
let starshipsZone = document.querySelector('.starships-zone');

let moviesScreen    = moviesZone.querySelector('.screen');
let planetsScreen   = planetsZone.querySelector('.screen');
let starshipsScreen = starshipsZone.querySelector('.screen');

// J'ajoute le texte suivant dans mon span
// mySpan.innerHTML = "Je suis un span element, j'ai pour parent, le screen People";

// J'ajoute la classe 'nouvelle-classe' à mon span
// mySpan.classList.add('nouvelle-classe');

// On vient de créer un tout nouvel élément <span class="nouvelle-classe"></span>
// console.log('Mon span : ', mySpan);

// Je rajoute à l'élément people Screen le span que nous venons de créer
// peopleScreen.appendChild(mySpan);


// Utilisation d'une fonction qui nous permet de lire l'API de Star Wars
// Cette fonction ne prend qu'un seul parametre, a savoir une url
// l'URL est forcément de type string
let api = (url) => 
{
    fetch(url)
        .then(function(response) {      // reponse du Post (fetch)
            return response.json();     // trransforme la data en format Json
        })
        .then(function(data) {
            let results = data.results;

            // J'itère sur chacune des valeurs de notre tableau d'objet results
            results.map( (value, index) => 
            {
                // Je découpe l'url à partir du séparateur "/"
                let zone  = url.split('/');
                let actors = value.characters;
                let luke = 'https://swapi.co/api/people/1/';
                
                let title = value.title;
                let name  = value.name;

                // Création dans le DOM à la zone concernée de la balise <span> </span>
                let span = document.createElement('span');

                // Ajout d'une classe à la zone concernée <span class="span-xxxxxx">
                // si l'acteur est 'Luke Skywalker'
                if (zone[zone.length - 1] == 'films' &&
                    actors[0] == luke)
                {
                    span.classList.add('span-movies');
                    span.innerHTML = title;
                }

                if (zone[zone.length - 2] == 'planets')
                {
                    span.classList.add('span-planets');
                    // Ajout du name entre <span> name </span>
                    span.innerHTML = name;
                }

                if (zone[zone.length - 2] == 'starships')
                {
                    span.classList.add('span-starships');
                    // Ajout du name entre <span> name </span>
                    span.innerHTML = name;
                }

                // Intégration de la balise <span> à la zone concernée dans le DOM
                if (zone[zone.length - 1] == 'films' &&
                    actors[0] == luke)
                    moviesScreen.appendChild(span);

                if (zone[zone.length - 2] == 'planets')
                    planetsScreen.appendChild(span);

                if (zone[zone.length - 2] == 'starships')
                    starshipsScreen.appendChild(span);
            })
        })
};

// Declaration de nos 3 urls
let apiFilms     = api("https://swapi.co/api/films");
let apiPlanets   = api("https://swapi.co/api/planets/");
let apiStarships = api("https://swapi.co/api/starships/");

// Cette fonction créée une variable type of element en paramètres pass in the parameters
function createNode(element) {
    return document.createElement(element); 
  }
  
// Cette fonction ajoute the second parameter(element) to the first one
  function append(parent, el) {
    return parent.appendChild(el);
  }
