const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Médaille Or', 'Médaille ARGENT', 'Médaille BRONZE'],
      datasets: [
        {
            label: 'Afrique du Sud',
            data: [0, 2, 1],
            borderWidth: 2
        },
        {
            label: 'Algérie',        
            data: [2, 1, 1],
            borderWidth: 2
        },
        {
            label: 'Cameroun',       
            data: [1, 0, 0],
            borderWidth: 2
        },
        {
            label: 'Cote d’ivoire',        
            data: [0, 1, 0],
            borderWidth: 2
        },
        {
          label: 'Ghana',      
          data: [0, 0, 1],
          borderWidth: 2
        },
        {
          label: 'Gambie',      
          data: [1, 0, 0],
          borderWidth: 2
        },
        {
          label: 'Kenya',   
          data: [2, 1, 0],
          borderWidth: 2
        },
        {
        label: 'Libye',       
        data: [0, 0, 1],
        borderWidth: 2
        },
        {
          label: 'Madagascar',       
          data: [0, 1, 0],
          borderWidth: 2
        },
        {
          label: 'Mali',        
          data: [0, 0, 1],
          borderWidth: 2
        },
        {
          label: 'Maroc',       
          data: [4, 4, 0],
          borderWidth: 2
        },
        {
          label: 'Maurice',     
          data: [0, 0, 1],
          borderWidth: 2
        },
        {
          label: 'Mozambique',       
          data: [0, 1, 0],
          borderWidth: 2
        },
        {
          label: 'Namibie',       
          data: [1, 0, 1],
          borderWidth: 2
        },
        {
          label: 'Nigéria',       
          data: [3, 2, 1],
          borderWidth: 2
        },
        {
          label: 'Rwanda',       
          data: [0, 0, 1],
          borderWidth: 2
        },
        {
          label: 'Sénégal',      
          data: [0, 1, 4],
          borderWidth: 2
        },
        {
          label: 'Tunisie',       
          data: [5, 2, 3],
          borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx1 = document.getElementById('myChart1');
  new Chart(ctx1,{
    type: 'bar',
    data: {
      labels: [
        'Participants',
        'Discipline',
        'Epreuve',
        'Nations'
      ],
      datasets: [{
        label: 'JAP 2019',
        data: [900, 11, 29, 42],
        borderWidth: 2
      },
      {
        label: 'JAP 2023',
        data: [1100, 11, 29, 42],
        borderWidth: 2
      }
    ],
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  });


    // comparaison d'image
  const element = document.getElementById("compare");
  
  const viewer = new ImageCompare(element).mount();

  // Reading time
  function readingTime(){
    const text = document.getElementById("article").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = "~ " + time + "minutes";
  }
  readingTime();
