'use strict';
var clickNo;
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


console.log(leftImage);
console.log(middleImage);
console.log(rightImage);

const imageSection = document.getElementById('images-section');

function bussMall(name) {
    this.name = name;
    this.path = `./images/${name}.jpg ` ;
   
    this.votes = 0;
    this.views = 0;
    
    
    bussMall.all.push(this);
  }

  bussMall.all=[];

  for (let i = 0; i < names.length; i++) {
    new bussMall(names[i]);
  }
  console.table(bussMall.all);

  function render() {

    console.log(bussMall.all);
    const leftIndex = randomNumber(0, bussMall.all.length - 1);

    
    console.log('Left', leftIndex, bussMall.all[leftIndex].path);
    leftImage.src = bussMall.all[leftIndex].path ;
    leftImage.title = bussMall.all[leftIndex].name;
    leftImage.alt = bussMall.all[leftIndex].name;
  
    const middleIndex = randomNumber(0, bussMall.all.length - 1);
    console.log('Middle', middleIndex, bussMall.all[middleIndex].path);
    middleImage.src = bussMall.all[middleIndex].path;
    middleImage.title = bussMall.all[middleIndex].name;
    middleImage.alt = bussMall.all[middleIndex].name;

    const rightIndex = randomNumber(0, bussMall.all.length - 1);
    console.log('Right', rightIndex, bussMall.all[rightIndex].path);
    rightImage.src = bussMall.all[rightIndex].path;
    rightImage.title = bussMall.all[rightIndex].name;
    rightImage.alt = bussMall.all[rightIndex].name;
 
    bussMall.all[leftIndex].views++;
    bussMall.all[middleIndex].views++;
    bussMall.all[rightIndex].views++;
}



  imageSection.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Target', event.target.id);
  if (event.target.id !== 'images-section') {
    for (let i = 0; i < bussMall.all.length; i++) {
      if (bussMall.all[i].name === event.target.title) {
        bussMall.all[i].votes++;
        
       
      }
    }
    console.log(bussMall.all);
    render();
  }
}
//helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

render();

