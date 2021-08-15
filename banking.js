document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const depositBox =document.getElementById('deposit-box')
    const currentDanount = depositBox.innerText;
    const newDtotal = parseFloat(currentDanount) + parseFloat(depositValue);
    depositBox.innerText = newDtotal;

    // update balance 
    const balanceTotal =document.getElementById('balance-total')
    const balanceTotalText =balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)

    const newBalanceTotal = previousBalanceTotal + parseFloat(depositValue)

    balanceTotal.innerText =newBalanceTotal;
    depositInput.value = '';
    
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const withDrawBanalceText = document.getElementById('withdraw-box');
    const currentWithdraw = withDrawBanalceText.innerText;
    const withdraConvetoNum =parseFloat(currentWithdraw);
    const withdrayAmoutotNum= parseFloat(withdrawAmount)
   const newWTotal = withdraConvetoNum + withdrayAmoutotNum;
   withDrawBanalceText.innerText = newWTotal
   

//    update balance 


/* const balanceTotal =document.getElementById('balance-total')
const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText)

const newBalanceTotal = previousBalanceTotal + parseFloat(depositValue)

balanceTotal.innerText =newBalanceTotal;
depositInput.value = ''; */

const balanceTotal =document.getElementById('balance-total')
const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText)


const newBalanceTotal = previousBalanceTotal - parseFloat(withdrawAmount)
balanceTotal.innerText = newBalanceTotal;
withdrawInput.value ='';

})

