

// ===========color flipper ==========

const btnColorFlipper = document.querySelector('.btn-color-flipper');
const color = document.querySelector('.color');
const colorFlipper = document.querySelector('.color-flipper');



const hexChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function random(){

   return Math.floor(Math.random()*hexChar.length);
}

// =====solution 1 ==========

btnColorFlipper.addEventListener('click', function(){
    
    var hex = ['#'];
    for(var i = 1; i <= 6; i++){
        hex[i] = hexChar[random()]
    }
    var newHex = hex.join('')

    colorFlipper.firstElementChild.style.backgroundColor = newHex; 
    color.textContent = newHex;
    console.log(newHex)

}) 

//======= solution 2 =========
/*
btnColorFlipper.addEventListener('click', function(){

    var hex = '#'
    for(var i =1; i <=6; i++){
        hex += hexChar[random()]
    }
colorFlipper.firstElementChild.style.backgroundColor = hex;
color.textContent =hex;

})
*/
// ==== counter =========

const counterBtns = document.querySelectorAll('button.increase, button.decrease, button.reset ')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const result =document.querySelector('.result')

var counter = 0;

counterBtns.forEach(btn => {
    btn.addEventListener('click', e=> {
        var element = e.currentTarget.classList;
       if(element.contains('increase')){
           counter++
        } else if (element.contains('decrease')){
            counter--
        } else {
            counter = 0;
        }
        result.innerHTML = counter
        if(counter > 0){result.style.color =  'var(--clr-green1)'} 
        else if(counter < 0){
            result.style.color =  'var(--clr-green4)'
        } else {
            result.style.color =  'black'
        }
    })

})

// ===== btn toggle =========



const sidebarBtn = document.querySelector('.checkbox')
const container = document.querySelector('.navbar')
const navbarList = document.querySelector('.navbar-list')


sidebarBtn.addEventListener('click', function(){
    navbarList.classList.toggle('show-list')
    container.childNodes[1].classList.toggle('show-container')
})

window.addEventListener('resize', function(){
    if(container.clientWidth > 700){
        navbarList.classList.remove('show-list')
    container.childNodes[1].classList.remove('show-container')
    sidebarBtn.checked = false;
    }
} )

console.log(container.clientWidth)

/*===========
   Reviews
===========*/

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


// variables
const author = document.getElementById('name');
const job = document.getElementById('job');
const img = document.getElementById('img');
const text = document.getElementById('text');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const randomBtn = document.querySelector('.random-btn')

// windows onload
var currentItem = 0

window.addEventListener('DOMContentLoaded', function(){
showPerson(currentItem)
})

// show person

function showPerson(person){
    var item = reviews[person]

    author.textContent = item.name
    job.textContent = item.job
    img.textContent = item.img
    text.textContent = item.text
}

// next prev person


nextBtn.addEventListener('click', function() {

    currentItem++
    if(currentItem > reviews.length - 1){ 
         currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson(currentItem)
})

function random(){

   return Math.floor(Math.random()*reviews.length)
}

randomBtn.addEventListener('click', function(){

    showPerson(random())
})

// Modal 

const modalOpenBtn = document.querySelector('.btn-open-modal')
const modalCloseBtn = document.querySelector('.btn-close-modal')

const firstL = document.querySelector('.small-container')
const secondL =document.querySelector('.small-container-2')


modalOpenBtn.addEventListener('click', function(){
    secondL.classList.toggle('show')
    firstL.classList.toggle('dontShow')
  
    
    
})

modalCloseBtn.addEventListener('click', function(){
    secondL.classList.toggle('show')
    firstL.classList.toggle('dontShow')
 
})


/*=======
  tabs
=======*/


/*
const btns = document.querySelectorAll('.tab-btn')
const tabs = document.querySelectorAll('.tab-text')


btns.forEach(btn=>{
    btn.addEventListener('click', e=>{
    btns.forEach(e=>{
        e.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    const id = e.target.dataset.id
    tabs.forEach(e=>{
       e.classList.remove('active') 
       })
     const ele = document.getElementById(id)  
     ele.classList.add('active')
})
})
*/

const about = document.querySelector('.tab')
const btns =document.querySelectorAll('.tab-btn')
const tabs = document.querySelectorAll('.tab-text')

about.addEventListener('click', e=>{
const id = e.target.dataset.id

 if(id){
     btns.forEach(btn=>{
    btn.classList.remove('active')
    console.log(e.target)
    e.target.classList.add('active')

})
tabs.forEach(e=>{
    e.classList.remove('active')
})
const element = document.getElementById(id)
element.classList.add('active')

 }
})

/*======
  menu
======*/  

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];





































