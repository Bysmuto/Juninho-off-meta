
all_champion = [
 'Nilah',
 'Renata',
 'Belveth',
  'Zeri',
  'Annie',
  'Olaf',
  'Galio',
  'TwistedFate',
  'XinZhao',
  'Urgot',
  'Leblanc',
  'Vladimir',
  'FiddleSticks',
   'Kayle',
   'MasterYi',
   'Alistar',
   'Ryze',
   'Sion',
   'Sivir',
   'Soraka',
   'Teemo',
   'Tristana',
   'Warwick',
   'Nunu',
   'MissFortune',
   'Ashe',
   'Tryndamere',
   'Jax',
   'Morgana',
   'Zilean',
   'Singed',
   'Evelynn',
   'Twitch',
   'Karthus',
   "Chogath",
   'Amumu',
   'Rammus',
   'Anivia',
   'Shaco',
   'DrMundo',
   'Sona',
   'Kassadin',
   'Irelia',
   'Janna',
   'Gangplank',
   'Corki',
   'Karma',
   'Taric',
   'Veigar',
   'Trundle',
   'Swain',
   'Caitlyn',
   'Blitzcrank',
   'Malphite',
   'Katarina',
   'Nocturne',
   'Maokai',
   'Renekton',
   'JarvanIV',
   'Elise',
   'Orianna',
   'Wukong',
   'Brand',
   'LeeSin',
   'Vayne',
   'Rumble',
   'Cassiopeia',
   'Skarner',
   'Heimerdinger',
   'Nasus',
   'Nidalee',
   'Udyr',
   'Poppy',
   'Gragas',
   'Pantheon',
   'Ezreal',
   'Mordekaiser',
   'Yorick',
   'Akali',
   'Kennen',
   'Garen',
   'Leona',
   'Malzahar',
   'Talon',
   'Riven',
   "KogMaw",
   'Shen',
   'Lux',
    'Xerath',
    'Shyvana',
    'Ahri',
    'Graves',
    'Fizz',
    'Volibear',
    'Rengar',
    'Varus',
    'Nautilus',
    'Viktor',
    'Sejuani',
    'Fiora',
    'Ziggs',
    'Lulu',
    'Draven',
    'Hecarim',
    "Khazix",
    'Darius',
    'Jayce',
    'Lissandra',
    'Diana',
    'Quinn',
    'Syndra',
    'AurelionSol',
    'Kayn',
    'Zoe',
    'Zyra',
    "Kaisa",
    "Seraphine",
    'Gnar',
    'Zac',
    'Yasuo',
    "Velkoz",
    'Taliyah',
    "Akshan",
    'Camille',
    'Braum',
    'Jhin',
    'Kindred',
    'Jinx',
    'TahmKench',
    'Viego',
    'Senna',
    'Lucian',
    'Zed',
    'Kled',
    'Ekko',
    'Qiyana',
    'Vi',
    'Aatrox',
    'Nami',
    'Azir',
    'Yuumi',
    'Samira',
    'Thresh',
    'Illaoi',
    "RekSai",
    'Ivern',
    'Kalista',
    'Bard',
    'Rakan',
    'Xayah',
    'Ornn',
    'Sylas',
    'Rell',
    'Neeko',
    'Aphelios',
    'Pyke',
    "Sett",
    "Vex",
    "Yone",
    "Gwen",
    "Lillia",
]
champions = all_champion.sort()




// ----------------------------------- Champion selector -----------------------------------


let som = document.getElementById('som')

 
function playSound(){  
  som.play() 
}
function playSoundSpin(){  
  spinSom.play() 
}

let div = document.querySelector('.champions')
 all_champion.forEach(champion => {div.innerHTML +=
    `<div class="champion" onmouseover="playSound()">

    <a class="link-champion" href="/champions/${champion}.html">

    <img src="/champions/profile/${champion}_0.jpg"><span class="name">${champion}
    
    </a>

    </span></div>`
}); 


// ----------------------------------- search bar -----------------------------------

let searchable = champions
   
   const searchInput = document.getElementById('search');
   const searchWrapper = document.querySelector('.search-bar');
   const resultsWrapper = document.querySelector('.results');
   
   searchInput.addEventListener('keyup', () => {
     let results = [];
     let input = searchInput.value;
     if (input.length) {
       results = searchable.filter((item) => {
         return item.toLowerCase().includes(input.toLowerCase());
       });
     }
     renderResults(results);
   });
   
   function renderResults(results) {
     if (!results.length) {
       return searchWrapper.classList.remove('show');
     }
   
     const content = results
       .map((champion) => {
         return `
          <a class="search-champion" href="/champions/${champion}.html">
          <li>${champion}</li> 
          </a>`;
       })
       .join('');
   
     searchWrapper.classList.add('show');
     resultsWrapper.innerHTML = `<ul>${content}</ul>`;
   }
   
 
