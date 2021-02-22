'use strict';

//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let clickNo =0;
const rounds =25;
const iterations = [];
const names = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass',
];

const leftImage = document.getElementById('left-image');
const middleImage = document.getElementById('middle-image');
const rightImage = document.getElementById('right-image');
const sectionButon = document.getElementById('sectionButton');
const imageSection = document.getElementById('images-section');

console.log(leftImage);
console.log(middleImage);
console.log(rightImage);


function BussMall(name) {
    this.name = name;
    this.path = `./images/${name}.jpg ` ;
   
    this.votes = 0;
    this.views = 0;
    
    
    BussMall.all.push(this);
  }

  BussMall.all=[];

  for (let i = 0; i < names.length; i++) {
    new BussMall(names[i]);
  }
  console.table(BussMall.all);

  function render() {

    console.log(BussMall.all);
    
    // Left Image

    let leftIndex = randomNumber(0, BussMall.all.length - 1);
    leftImage.src = BussMall.all[leftIndex].path ;
    leftImage.title = BussMall.all[leftIndex].name;
    leftImage.alt = BussMall.all[leftIndex].name;
  
    //  Middle Image 
    
    let middleIndex = randomNumber(0, BussMall.all.length - 1);
  while (middleIndex === leftIndex) {
    middleIndex = randomNumber(0, names.length -1);
    if(middleIndex !== leftIndex) {
      break;
    }
  }
    middleImage.src = BussMall.all[middleIndex].path;
    middleImage.title = BussMall.all[middleIndex].name;
    middleImage.alt = BussMall.all[middleIndex].name;

    // Right Image

    let rightIndex = randomNumber(0, BussMall.all.length - 1);
  while (middleIndex !== leftIndex) {
    rightIndex = randomNumber(0, names.length -1);
    
    if(rightIndex === leftIndex || rightIndex === middleIndex){
      rightIndex = randomNumber(0, names.length -1);
      
    } else{
    break;
  } 
  }
    rightImage.src = BussMall.all[rightIndex].path;
    rightImage.title = BussMall.all[rightIndex].name;
    rightImage.alt = BussMall.all[rightIndex].name;
 
    BussMall.all[leftIndex].views++;
    BussMall.all[middleIndex].views++;
    BussMall.all[rightIndex].views++;
}

render ();

  imageSection.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Target', event.target.id);
  if (event.target.id !== 'images-section') {
    for (let i = 0; i < BussMall.all.length; i++) {
      if (BussMall.all[i].name === event.target.title) {
        BussMall.all[i].votes++;
        
        
       } 
   
  } 
  render();
clickNo++;
console.log(clickNo);

if(clickNo === rounds){
  console.log('rounds');
  imageSection.removeEventListener('click', handleClick);
  
  const buttonEl = document.createElement('button');
  sectionButon.appendChild(buttonEl);
  buttonEl.textContent = 'View Result :)';

  sectionButon.addEventListener('click', handleButton);
  }
}
}

function handleButton(event) {
  console.log(event.target.id);
  
  sectionButon.removeEventListener('click', handleButton);
  
  const unorderSection = document.getElementById('resultShow');
  const unorderedList = document.createElement('ul');
  unorderSection.appendChild(unorderedList);

  for (let i = 0; i < BussMall.all.length; i++) {
    const liEl = document.createElement('li');
    unorderedList.appendChild(liEl);
    liEl.textContent = `${BussMall.all[i].name.toUpperCase()} had ${BussMall.all[i].votes} votes and was seen ${BussMall.all[i].views} times.`;
  }
  createChart();
}
function createChart() {
  const ctx = document.getElementById('resultChart').getContext('2d');

  const busMallVotes = [];
  const busmallViews = [];

  for (let i = 0; i < BussMall.all.length; i++) {
    busMallVotes.push(BussMall.all[i].votes);
    busmallViews.push(BussMall.all[i].views);
  }
  const chart = new Chart(ctx, {
    // The type of chart 
    type: 'bar',

    // The data for  dataset
    data: {
      labels: names,
      datasets: [{
        label: '# of votes',
        backgroundColor: 'black',
        borderColor: 'yellow',
        borderWidth: 5,
        
        data: busMallVotes,
      },
      {
        label: '# of views',
        backgroundColor: 'black',
        borderColor: 'lightgreen',
        borderWidth: 5,
        
        data: busmallViews,
      }]
    },

    // Configuration options go here
    options: {
      responsive: false
    }
  });
}

















