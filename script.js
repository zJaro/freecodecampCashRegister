let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

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
    cash = Number(cashInput.value);
    console.log(`Cash from customer ${cash}`)
    checkPrice();
})

priceBtn.addEventListener("click",() =>{
    price = Number(priceInput.value);
    updateTotal();
    console.log(`Price in store ${price}`)
})

const updateTotal = () => {
    total.innerHTML =`Total: $${price}`;
};

const checkPrice = () => {
  let registerMessage = ``;
    let totalCashInRegister = cid.reduce((sum, e) => sum + e[1], 0);
    console.log(totalCashInRegister)
    console.log(`Cash: ${cash}`);
    console.log(`Price: ${price}`);
    if (price > cash){
        alert("Customer does not have enough money to purchase the item");
    }
    else if (price === cash){
        changeDue.innerHTML ="No change due - customer paid with exact cash";
        alert("No change due - customer paid with exact cash");
        
    } 
    else{
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
      
      let change = cash - price;
      let change2 = change;
      let temp
      if(totalCashInRegister < change){
        changeDue.innerHTML=`Status: INSUFFICIENT_FUNDS`;
        return 0;
      }
      else{
        for (let i = cid.length - 1; i >= 0; i--) {
          console.log(`Change to give back $${change}`);
          temp = changeCount(change, moneyValue[i][1], i);
          change = temp[0];
          registerMessage += temp[1];
          console.log(change);
        }
        if(change === 0 && totalCashInRegister === change2 ){
          changeDue.innerHTML=`Status: CLOSED ${registerMessage}`;
        }
        else if(change === 0 ){
          changeDue.innerHTML=`Status: OPEN ${registerMessage}`;
        }
        else{
        changeDue.innerHTML=`Status: INSUFFICIENT_FUNDS`;
        }
    

      }
    }
    
  };




const changeCount = (change, cashType, cidPlace) =>{
  let registerMessage = '';
  const valueOfCashTypeInRegister = cid[cidPlace][1];
  const amountOfCashTypeInRegister = valueOfCashTypeInRegister / cashType;
  const amountOfCashTypeInChange = Math.floor(change / cashType);

  console.log(`Amount Of ${cid[cidPlace][0]} In Change ${amountOfCashTypeInChange}`);
  console.log(`amountOfCashTypeInRegister in cash register ${amountOfCashTypeInRegister}`);
  console.log(`valueOfCashTypeInRegister in cash register ${valueOfCashTypeInRegister}`);

  if( amountOfCashTypeInRegister > amountOfCashTypeInChange){
    change = change - cashType * amountOfCashTypeInChange;
    if(cashType * amountOfCashTypeInChange != 0)
      {
      registerMessage += `${cid[cidPlace][0]}: $${cashType * amountOfCashTypeInChange} `;
      };
  }
  else{
    change = change - cashType * amountOfCashTypeInRegister;
    if(cashType * amountOfCashTypeInRegister != 0){
    registerMessage += `${cid[cidPlace][0]}: $${cashType * amountOfCashTypeInRegister} `;}

  }
  change = Number(change.toFixed(2));
  console.log(`Change still: ${change}`)
  
  return [change, registerMessage];
}






