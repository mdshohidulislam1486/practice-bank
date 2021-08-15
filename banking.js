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

const depositInput = document.getElementById('deposit-input');
const depositValue = depositInput.value;
if(depositInput == ' '){
    const depositBtn = document.getElementById('deposit-btn');
    depositBtn.setAttribute('disabled', faltruese)
}else if(depositInput >= 0){
    depositBtn.setAttribute('disabled', false)
}
 else {
    depositBtn.setAttribute('disabled', true)

}


