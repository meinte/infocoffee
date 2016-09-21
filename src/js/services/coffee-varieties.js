var varieties;

(function() {
  var data = [
    {
      id: 1,
      region: 'South America',
      land: 'Brazil',
      variety: ['Bourbon', 'Catuai', 'Caturra', 'Mundo Novo', 'Robusta'],
      img: 'https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags#/media/File:Flag_of_Brazil.svg'
    },
    {
      id: 2,
      region: 'Africa',
      land: 'Kenya',
      variety: ['Batian', 'SL-28', 'SL-34', 'Riuri 11'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg'
    },
    {
      id: 3,
      region: 'Central America',
      land: 'Costa Rica',
      variety: ['Bourbon', 'Catuai', 'Caturra', 'Gesha', 'Typica', 'Villa Sarchi'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg'
    },
    {
      id: 4,
      region: 'Asia',
      land: 'Papua New Guinea',
      variety: ['Bourbon', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg'
    },
    {
      id: 5,
      region: 'Africa',
      land: 'Ethiopia',
      variety: ['Heirloom', 'Gesha', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg'
    },
    {
      id: 6,
      region: 'Central America',
      land: 'Panama',
      variety: ['Bourbon', 'Catuai', 'Caturra', 'Gesha', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg'
    },
    {
      id: 7,
      region: 'Africa',
      land: 'Burundi',
      variety: ['Bourbon', 'SL-28', 'SL-34'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg'
    },
    {
      id: 8,
      region: 'Africa',
      land: 'Tanzania',
      variety: ['Bourbon', 'Robusta', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg'
    },
    {
      id: 9,
      region: 'South America',
      land: 'Colombia',
      variety: ['Bourbon', 'Castillo', 'Caturra', 'Gesha', 'Maragogype', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
    },
    {
      id: 10,
      region: 'Asia',
      land: 'Vietnam',
      variety: ['Bourbon', 'Catimor', 'Robusta'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg'
    },
    {
      id: 11,
      region: 'Central America',
      land: 'Honduras',
      variety: ['Bourbon', 'Catuai', 'Caturra', 'Pacas', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg'
    },
    {
      id: 12,
      region: 'Asia',
      land: 'Indonesia',
      variety: ['Typica', 'Robusta'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg'
    },
    {
      id: 13,
      region: 'South America',
      land: 'Peru',
      variety: ['Bourbon', 'Catimor', 'Catuai', 'Caturra', 'Mundo Novo', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg'
    },
    {
      id: 14,
      region: 'Central America',
      land: 'Mexico',
      variety: ['Bourbon', 'Catimor', 'Catuai', 'Caturra', 'Maragogype', 'Mundo Novo', 'Typica'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg'
    }
  ];

  varieties = {
    getData: getData
  };

  function getData(cb) {
    if (!cb) {
      throw 'Callback not defined.';
    }
    setTimeout(function () {
      if (Math.floor(Math.random() * 20) === 2) {
        cb('Fetch data error.');
      } else {
        cb(null, data);
      }
    }, 10);
  }

  if (typeof module !== 'undefined') {
    module.exports = varieties;
  }
})();
