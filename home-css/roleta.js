full_champion = [
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
   'LeBlanc',
   'Vladimir',
   'Fiddlesticks',
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
    "Kogmaw",
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
     'Tahmkench',
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
     "Reksai",
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

let buildss = []


full_champion.forEach(champ => {buildss.push  (`<a href="/champions/${champ}.html">
<div class="build">
  <div class="preview">
  <img class="profile" src="/champions/profile/${champ}_0.jpg" />
  <div class="buildName">Build</div>
  <div class="buildDescri">descrição</div>
  <div class="buildItens">imagem da build</div>
</div></a>`)

});




const builds = buildss ;



//--------------------------------------
(function () {
  const items = builds
  const doors = document.querySelectorAll('.door');
  
  document.querySelector('#spinner').addEventListener('click', autospin);

  function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = '0';
      } else if (door.dataset.spinned === '1') {
        return;
      }

      const boxes = door.querySelector('.boxes');
      const boxesClone = boxes.cloneNode(false);
      //inicio **
      const pool = ['']; 

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          'transitionstart',
          function () {
            door.dataset.spinned = '1';
            this.querySelectorAll('.box').forEach((box) => {
              box.style.filter = 'blur(1px)';
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          'transitionend',
          function () {
            this.querySelectorAll('.box').forEach((box, index) => {
              box.style.filter = 'blur(0)';
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = door.clientWidth + 'px';
        box.style.height = door.clientHeight + 'px';
        box.innerHTML = pool[i];
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

  async function spin() {
    init(false, 1, 2);
    
    for (const door of doors) {
      const boxes = door.querySelector('.boxes');
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = 'translateY(0)';
      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();

  
  let click = 0
  function autospin(){
  if (click <= 0) {spin()}
  else{init(),spin()}
  click = 1
}
 

})();


// Alavanca

const lever = () => {
	document.querySelector("#arm").classList.add("clicked");

	setTimeout(function () {
		document.querySelector("#arm").classList.remove("clicked");
	}, 700);
};
document.querySelector('.button').addEventListener('click', lever);
