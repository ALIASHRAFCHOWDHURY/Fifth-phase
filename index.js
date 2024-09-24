/***Nav bar Blog */

document.getElementById('blog-section').addEventListener('click', function(){
        window.location.href = 'home.html';
})

/***donation part */
document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input') ;  
        
        if (isNaN(addMoney) || addMoney < 0) {
                alert('failed to donate money!!');
                return;
            }
            

        const donationFund = getTextValueById('donation-fund');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund').innerText = donatedMoney ;

})