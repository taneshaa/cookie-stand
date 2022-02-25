'use strict';
let table = document.getElementById('table');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];



function Store(storeName, minCustHour, maxCustHour, avgCookieCust) {
  this.storeName = storeName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieCust = avgCookieCust;
  this.cust = [];
  this.cookiesBought = [];
  this.totalCookies = 0;
}

Store.prototype.custGen = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cust.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
  }
};

Store.prototype.cookiesPerHour = function () {
  this.custGen();
  for (let i = 0; i < hours.length; i++) {
    let cookiesPerHour = Math.ceil(this.avgCookieCust * this.cust[i]);
    this.cookiesBought.push(cookiesPerHour);
  }
};

Store.prototype.render = function () {
  this.cookiesPerHour();
  let row = document.createElement('tr');
  table.appendChild(row);
  let td = document.createElement('td');
  td.textContent = this.storeName;
  row.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let td1 = document.createElement('td');
    td1.textContent = `${this.cookiesBought[i]}`;
    row.appendChild(td1);
  }
  // let td = document.createElement('td');
  // td.textContent = this.totalCookies;
  // row.appendChild(td);
  // table.appendChild(row);
};

function tableHead() {
  let tableHeadRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  table.appendChild(tableHeadRow);
  tableHeader.textContent = 'shop locations';
  tableHeadRow.append(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    tableHeadRow.appendChild(td);
  }
  let tableHeadTotal = document.createElement('th');
  tableHeadTotal.textContent = 'daily totals';
  tableHeadRow.appendChild(tableHeadTotal);
  let salesTable = document.getElementById('table');
  salesTable.appendChild(tableHeadRow);
}

tableHead();

function tableFooter() {
  let tableFooter = document.createElement('tfoot');
  table.appendChild(tableFooter);
  let tableFooterRow = document.createElement('tr');
  tableFooter.appendChild(tableFooterRow);
  let td = document.createElement('td');
  td.textConent = 'cookies total';
  tableFooterRow.append(td);
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < locationList.length; j++) {
      hourlyTotal += locationList[j].cookiesBought[i];
    }
  }

}
//     let totalCell = document.createElement('td'); totalCell.textContent = 'Daily Totals'; tableRow.appleChild(totalCell);
// }
// renderHeader();
// hourTotal += locationList[j].hourlySales[i]; grandTotal += hourTotal;


// let TableData = document.createElement('td');
// TableData.textContent = hourTotal;
// tableRow.appendChild(totalData);
// }
// let totalData = document.createElement('td');
// totalData.textContent = grandTotal;
// tableRow.appendChild(totalData);


// let Seattle = {
//     location: 'Seattle',
//     minCustHour: 23,
//     maxCustHour: 65,
//     avgCookieCust: 6.3,
//     cust: [],
//     cookiesBought: [],
//     totalCookies: 0,
//     custGen: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cust.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//         }
//     },
//     cookiesPerHour: function() {
//         this.custGen();
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesPerHour = Math.ceil(this.avgCookieCust * this.cust[i]);
//             this.cookiesBought.push(cookiesPerHour);
//         }
//     },

//     render: function() {
//         this.cookiesPerHour();
//         let ul = document.createElement('ul');
//         section.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]}`;
//             ul.appendChild(li);
//         }
//     }
// };
// Seattle.render();
// console.log(Seattle);



// let Tokyo = {
//     location: 'Tokyo',
//     minCustHour: 3,
//     maxCustHour: 24,
//     avgCookieCust: 1.2,
//     cust: [],
//     cookiesBought: [],
//     totalCookies: 0,
//     custGen: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cust.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//         }
//     },
//     cookiesPerHour: function() {
//         this.custGen();
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesPerHour = Math.ceil(this.avgCookieCust * this.cust[i]);
//             this.cookiesBought.push(cookiesPerHour);
//         }
//     },
//     render: function() {
//         this.cookiesPerHour();
//         let ul = document.createElement('ul');
//         section.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]}`;
//             ul.appendChild(li);
//         }
//     }
// };
// Tokyo.render();

// let Dubai = {
//     location: 'Dubai',
//     minCustHour: 11,
//     maxCustHour: 38,
//     avgCookieCust: 3.7,
//     cust: [],
//     cookiesBought: [],
//     totalCookies: 0,
//     custGen: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cust.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//         }
//     },
//     cookiesPerHour: function() {
//         this.custGen();
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesPerHour = Math.ceil(this.avgCookieCust * this.cust[i]);
//             this.cookiesBought.push(cookiesPerHour);
//         }
//     },
//     render: function() {
//         this.cookiesPerHour();
//         let ul = document.createElement('ul');
//         section.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]}`;
//             ul.appendChild(li);
//         }
//     }
// };
// Dubai.render();

// let Paris = {
//     location: 'Paris',
//     minCustHour: 20,
//     maxCustHour: 38,
//     avgCookieCust: 2.3,
//     cust: [],
//     cookiesBought: [],
//     totalCookies: 0,
//     custGen: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cust.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//         }
//     },
//     cookiesPerHour: function() {
//         this.custGen();
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesPerHour = Math.ceil(this.avgCookieCust * this.cust[i]);
//             this.cookiesBought.push(cookiesPerHour);
//         }
//     },
//     render: function() {
//         this.cookiesPerHour();
//         let ul = document.createElement('ul');
//         section.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]}`;
//             ul.appendChild(li);
//         }
//     }
// };
// Paris.render();

// let Lima = {
//     location: 'Lima',
//     minCustHour: 2,
//     maxCustHour: 16,
//     avgCookieCust: 4.6,
//     cust: [],
//     cookiesBought: [],
//     totalCookies: 0,
//     custGen: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.cust.push(Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour));
//         }
//     }
//     cookiesPerHour: function() {
//         this.custGen();
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesPerHour = Math.ceil(this.avgCookieCust * this.cust[i]);
//             this.cookiesBought.push(cookiesPerHour);
//         }
//     },
//     render: function() {
//         this.cookiesPerHour();
//         let ul = document.createElement('ul');
//         section.appendChild(ul);
//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li');
//             li.textContent = `${hours[i]}:${this.cookiesBought[i]}`;
//             ul.appendChild(li);
//         }
//     }
// };
// Lima.render();

function cookiesSold() {
  let city = [Seattle, Tokyo, Dubai, Paris, Lima,];
  for (let i = 0; i < MediaCapabilities.length; i++) {
    let city = cities[i];
    for (let j = 0; j < 14; j++) {
      city.custGen();
      let cookies = Math.ceil(Number(city.cust) * Number(city.avgCookieCust));
      city.cookiesBought.push(cookies);
    }
    city.cookieSum();
  }
}


let seattle = new Store('Seattle', 23, 65, 6.3);
seattle.render();
let tokyo = new Store('Toyko', 3, 24, 1.2);
tokyo.render();
let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.render();
let paris = new Store('Paris', 20, 38, 2.3);
paris.render();
let lima = new Store('Lima', 2, 16, 4.6);
lima.render();
console.log(store);

// lots of confusion here?? I tried referencing kitten code but have no idea what to do next??
function handleSubmit(event){
  event.preventDefault();
  let storeName = event.target.storeName.value;
  let minCustHour = event.target.minCustHour.value;
  let maxCustHour = event.target.maxCustHour.value;
  let avgCookieCust = event.target.avgCookieCust.value;
}

