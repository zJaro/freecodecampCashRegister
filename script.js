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

const moneyValue = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

const cashBtn = document.getElementById("purchase-btn");
const priceBtn = document.getElementById("price-btn");
const total = document.getElementById("total");
const changeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const priceInput = document.getElementById("price");


let cash = 0;
let price = 1.87;

cashBtn.addEventListener("click",() =>{
    cash = cashInput.value;
    console.log(`Cash from customer ${cash}`)
    checkPrice();
})

priceBtn.addEventListener("click",() =>{
    price = priceInput.value;
    updateTotal();
    console.log(`Price in store ${price}`)
})

const updateTotal = () => {
    total.innerHTML =`Total: $${price}`;
};

const checkPrice = () => {
    if (price > cash){
        alert("Customer does not have enough money to purchase the item");
    }
    else if (price == cash){
        alert("No change due - customer paid with exact cash");
        changeDue.value ="No change due - customer paid with exact cash";
        changeDue.innerHTML ="No change due - customer paid with exact cash";
    } 
    else{
      changeCheck();
    }
  };

const changeCheck = () => {
  let diff = cash - price;
  console.log(`Change to give back $${diff}`);
  let test = changeCount(diff,moneyValue[moneyValue.length - 1][1]);
  diff = hundreds(diff);
  diff = twenties(diff)
  diff = tens(diff);
  console.log(diff)
  

}

const changeCount = (diff, cashType, cidPlace) =>{
  const valueOfCashTypeInRegister = cid[cidPlace][1];
  const amountOfCashTypeInRegister = valueOfCashTypeInRegister / cashType;
  const amountOfCashTypeInRegisterInChange = Math.floor(diff / cashType);

  console.log(`Amount Of Hundreds In Change ${amountOfCashTypeInRegisterInChange}`);
  console.log(`amountOfCashTypeInRegister in cash register ${amountOfCashTypeInRegister}`);
  console.log(`valueOfCashTypeInRegister in cash register ${valueOfCashTypeInRegister}`);
  diff = diff - amountOfCashTypeInRegister * cashType;
  console.log(`Difference: ${diff}`)
  return diff;
}






