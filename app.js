'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let container = document.getElementById('container');

let seattle = {

    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    avgCustomerPerHour: [],
    avgCookiesEachHour: [],
    total: 0,


    totalCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
            this.total += this.avgcookiesEachHour[i];
        }
    },


    getRandomInt: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        for(let i = 0 ; i < hours.length; i++){
        this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
        },

    render: function (){
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let j = 0; j < hours.length; j++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]}` ;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `total: ${this.total}`;
    }
}

seattle.getRandomInt(23,65);
seattle.totalCookies();
seattle.render();

let Tokyo = {

    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    avgCustomerPerHour: [],
    avgCookiesEachHour: [],
    total: 0,


    totalCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
            this.total += this.avgcookiesEachHour[i];
        }
    },


    getRandomInt: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        for(let i = 0 ; i < hours.length; i++){
        this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
        },

    render: function (){
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let j = 0; j < hours.length; j++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]}` ;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `total: ${this.total}`;
    }
}

Tokyo.getRandomInt(3,24);
Tokyo.totalCookies();
Tokyo.render();

let Dubai = {

    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    avgCustomerPerHour: [],
    avgCookiesEachHour: [],
    total: 0,


    totalCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
            this.total += this.avgcookiesEachHour[i];
        }
    },


    getRandomInt: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        for(let i = 0 ; i < hours.length; i++){
        this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
        },

    render: function (){
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let j = 0; j < hours.length; j++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]}` ;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `total: ${this.total}`;
    }
}

Dubai.getRandomInt(11,38);
Dubai.totalCookies();
Dubai.render();

let Paris = {

    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    avgCustomerPerHour: [],
    avgCookiesEachHour: [],
    total: 0,


    totalCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
            this.total += this.avgcookiesEachHour[i];
        }
    },


    getRandomInt: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        for(let i = 0 ; i < hours.length; i++){
        this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
        },

    render: function (){
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let j = 0; j < hours.length; j++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]}` ;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `total: ${this.total}`;
    }
}

Paris.getRandomInt(20,38);
Paris.totalCookies();
Paris.render();

let Lima = {

    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    avgCustomerPerHour: [],
    avgCookiesEachHour: [],
    total: 0,


    totalCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgcookiesEachHour.push(this.avgcustPerHour[i] * this.avg);
            this.total += this.avgcookiesEachHour[i];
        }
    },


    getRandomInt: function (min, max) {
        min = Math.ceil(this.min);
        max = Math.floor(this.max);
        for(let i = 0 ; i < hours.length; i++){
        this.avgcookiesEachHour.push(Math.floor(Math.random() * (max - min + 1) + min)); }
        },

    render: function (){
        let articleEl = document.createElement('article');
        container.appendChild(articleEl);
        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let j = 0; j < hours.length; j++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = `${hours[j]} : ${this.avgcookiesEachHour[j]}` ;
        }
        let total = document.createElement('li');
        ulEl.appendChild(total);
        total.textContent = `total: ${this.total}`;
    }
}

Lima.getRandomInt(2,16);
Lima.totalCookies();
Lima.render();