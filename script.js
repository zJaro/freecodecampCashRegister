let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashBtn = document.getElementById("purchase-btn");
const priceBtn = document.getElementById("price-btn");

const cashInput = document.getElementById("cash");
const priceInput = document.getElementById("price");


let cash = 0;
let price = 1.87;

cashBtn.addEventListener("click",() =>{
    cash = cashInput.value;
    console.log(cash)
})

priceBtn.addEventListener("click",() =>{
    price = priceInput.value;
    console.log(price)
})