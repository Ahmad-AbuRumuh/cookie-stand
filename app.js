'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations = [];

let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.avgCustomerPerHour = [];
    this.avgCookiesEachHour = [];
    this.total = 0;
    locations.push(this);
}

Location.prototype.getRandomInt = function (min, max) {
    min;
    max;
    for (let i = 0; i < hours.length; i++) {
      min = Math.ceil(this.min);
      max = Math.floor(this.max);
      let randCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.avgCustomerPerHour.push(randCust);
    }
}

Location.prototype.totalCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.avgCookiesEachHour.push(Math.ceil(this.avgCustomerPerHour[i] * this.avg));
        this.total += this.avgCookiesEachHour[i];
    }
}

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Location';

    for (let i = 0; i < hours.length; i++) {
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];        
    }
    let thEl1 = document.createElement('th')
    trEl.appendChild(thEl1)
    thEl1.textContent = `Daily Location Total`
}
createTableHeader();

Location.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = this.avgCookiesEachHour[i];
    }
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = this.total;
}

function tableFooter() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
  
    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = 'Totals';
  
    let totalOfTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      let total = 0;
      for (let j = 0; j < locations.length; j++) {
        total += locations[j].avgCookiesEachHour[i];
  
      }
      totalOfTotal += total;
      let tdEl2 = document.createElement('td');
      trEl.appendChild(tdEl2);
      tdEl2.textContent = total;
    }
    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = `${totalOfTotal}`;
}

let seattle = new Location('Seattle', 23, 65, 6.3)
seattle.getRandomInt(23, 65);
seattle.totalCookies();

let tokyo = new Location('Tokyo', 3, 24, 1.2)
tokyo.getRandomInt(3, 24);
tokyo.totalCookies();

let dubai = new Location('Dubai', 11, 38, 3.7)
dubai.getRandomInt(11, 38);
dubai.totalCookies();

let paris = new Location('Paris', 20, 38, 2.3)
paris.getRandomInt(20, 38);
paris.totalCookies();

let lima = new Location('Lima', 2, 16, 4.6)
lima.getRandomInt(2, 16);
lima.totalCookies();

for (let i = 0; i < locations.length; i++) {
    locations[i].render();
}
tableFooter();

let form = document.getElementById('form');
form.addEventListener('submit', addBranch);
function addBranch(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let min = event.target.min.value;
    let max = event.target.max.value;
    let avg = event.target.avg.value;
    
    tableEl.deleteRow(-1);
    let newBranch = new Location(name, min, max, avg);
    newBranch.getRandomInt(min, max);
    newBranch.totalCookies();
    newBranch.render();
    
    tableFooter();
    document.getElementById('form').reset();
}


// let seattle = {

//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     avgCustomerPerHour: [],
//     avgCookiesEachHour: [],
//     total: 0,

//     totalCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesEachHour.push(this.avgCustomerPerHour[i] * this.avg);
//             this.total += this.avgCookiesEachHour[i];
//         }
//     },

//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgCookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgCookiesEachHour[j]}` ;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`;
//     }
// }

// seattle.getRandomInt(23,65);
// seattle.totalCookies();
// seattle.render();

// let Tokyo = {

//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     avgCustomerPerHour: [],
//     avgCookiesEachHour: [],
//     total: 0,

//     totalCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesEachHour.push(this.avgCustomerPerHour[i] * this.avg);
//             this.total += this.avgCookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgCookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgCookiesEachHour[j]}` ;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`;
//     }
// }

// Tokyo.getRandomInt(3,24);
// Tokyo.totalCookies();
// Tokyo.render();

// let Dubai = {

//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     avgCustomerPerHour: [],
//     avgCookiesEachHour: [],
//     total: 0,


//     totalCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesEachHour.push(this.avgCustomerPerHour[i] * this.avg);
//             this.total += this.avgCookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgCookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgCookiesEachHour[j]}` ;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`;
//     }
// }

// Dubai.getRandomInt(11,38);
// Dubai.totalCookies();
// Dubai.render();

// let Paris = {

//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     avgCustomerPerHour: [],
//     avgCookiesEachHour: [],
//     total: 0,


//     totalCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesEachHour.push(this.avgCustomerPerHour[i] * this.avg);
//             this.total += this.avgCookiesEachHour[i];
//         }
//     },


//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgCookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgCookiesEachHour[j]}` ;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`;
//     }
// }

// Paris.getRandomInt(20,38);
// Paris.totalCookies();
// Paris.render();

// let Lima = {

//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     avgCustomerPerHour: [],
//     avgCookiesEachHour: [],
//     total: 0,


//     totalCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.avgCookiesEachHour.push(this.avgCustomerPerHour[i] * this.avg);
//             this.total += this.avgCookiesEachHour[i];
//         }
//     },

//     getRandomInt: function (min, max) {
//         min = Math.ceil(this.min);
//         max = Math.floor(this.max);
//         for(let i = 0 ; i < hours.length; i++){
//         this.avgCookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
//         },

//     render: function (){
//         let articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         let h2El = document.createElement('h2');
//         articleEl.appendChild(h2El);
//         h2El.textContent = this.name;
//         let ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//         for (let j = 0; j < hours.length; j++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = `${hours[j]} : ${this.avgCookiesEachHour[j]}` ;
//         }
//         let total = document.createElement('li');
//         ulEl.appendChild(total);
//         total.textContent = `total: ${this.total}`;
//     }
// }

// Lima.getRandomInt(2,16);
// Lima.totalCookies();
// Lima.render();
