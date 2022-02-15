'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm',];

let Seattle = {
  minCustHour: 23,
  maxCustHour: 65,
  avgCookieCust: 6.3,
  cust: 0,
  cookiesBought: [],
  totalCookies: 0,
  // cookieSum: function()
  //  this.cookiesBought);
  custGen: function() {
    for(let i = 0; i < hours.length; i++){
    return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1) + this.minCustHour)};
  },
  cookiesPerHour: function(){
    for(let i = 0; i < hours.length; i++){
    let cookiesPerHour = Math.ceil(this.avgCookiesCust * this.custGen());
    this.cookiesBought.push(cookiesPerHour);
    console.log(cookiesBought);
  }
  this.cookiesPerHour()
}
// };
// //for salesPerHour = function(){
//   //for (let i = 0;) i <hours.length; i++){
//  //   console.log(Seattle);
// //  }
// //}
// // Seattle.render();

// let Tokyo = {
//   minCustHour: 3,
//   maxCustHour: 24,
//   avgCookieCust: 1.2,
//   cust: 0,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookieSum: function(){
//     this.cookiesBought);
//   custGen: function () {
//     return Math.floor(Math.random() * (this.MaxCustHour - this.minCustHour + 1) + this.minCustHour);},
//   }
// };
// Tokyo.render();

// let Dubai = {
//   minCustHour: 11,
//   maxCustHour: 38,
//   avgCookieCust: 3.7,
//   cust: 0,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookieSum: function(){
//     this.cookiesBought);
//   custGen: function () {
//     return Math.floor(Math.random() * (this.MaxCustHour - this.minCustomer + 1) + this.minCustHour);},
//   }
// }
// // Dubai.render();

// let Paris = {
//   minCustHour: 20,
//   maxCustHour: 38,
//   avgCookieCust: 2.3,
//   cust: 0,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookieSum: function(){
//     this.cookiesBought);
//   custGen: function () {
//     return Math.floor(Math.random() * (this.MaxCustHour - this.minCustomer + 1) + this.minCustHour);},
//   }
// };
// // Paris.render();

// let Lima = {
//   minCustHour: 1,
//   maxCustHour: 16,
//   avgCookieCust: 4.6,
//   cust: 0,
//   cookiesBought: [],
//   totalCookies: 0,
//   cookieSum: function(){
//     this.cookiesBought);
//   };
//   custGen: function () {
//     return Math.floor(Math.random() * (this.MaxCustHour - this.minCustomer + 1) + this.minCustHour);
//   }
// };
// // Lima.render();

//  function cookiesSold(){
//   let city =[Seattle, Tokyo, Dubai, Paris, Lima,];
//   for(let i = 0; i < MediaCapabilities.length; i++){
//     let city = cities[i];
//     for(let j = o; j <14; j++){
//       city.custGen();
//       let cookies = Math.ceil(Number(city.cust) * Number(city.avgCookieCust));
//       city.cookiesBought.push(cookies);
//     }
//     city.cookieSum();
//   }
// }
