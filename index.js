/***Nav bar Blog */

document.getElementById('blog-section').addEventListener('click', function(){
        window.location.href = 'home.html';
})

/***donation part */
document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input') ;  
        
        // if (isNaN(addMoney) || addMoney <= 0 ) {
        //         alert('failed to donate money!!');
        //         return;
        //     }
        if (isNaN(addMoney) || addMoney <= 0 ) {
                alert('failed to donate money!!');
                return;
        }  

        const donationFund = getTextValueById('donation-fund');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');

        if( addMoney > myAccountBalance){
                alert("You don't have sufficient balance!!");
                return;
        }
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund').innerText = donatedMoney ;

})
document.getElementById('btn-add-money-two').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input-two') ;  
        
        // if (isNaN(addMoney) || addMoney <= 0 ) {
        //         alert('failed to donate money!!');
        //         return;
        //     }
        if (isNaN(addMoney) || addMoney <= 0 ) {
                alert('failed to donate money!!');
                return;
        }  

        const donationFund = getTextValueById('donation-fund-two');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');

        if( addMoney > myAccountBalance){
                alert("You don't have sufficient balance!!");
                return;
        }
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund-two').innerText = donatedMoney ;

})
document.getElementById('btn-add-money-three').addEventListener('click', function(event){
        event.preventDefault();
        const addMoney = getInputValueById('add-money-input-three') ;  
        
        // if (isNaN(addMoney) || addMoney <= 0 ) {
        //         alert('failed to donate money!!');
        //         return;
        //     }
        if (isNaN(addMoney) || addMoney <= 0 ) {
                alert('failed to donate money!!');
                return;
        }  

        const donationFund = getTextValueById('donation-fund-three');
        const donatedMoney =  addMoney + donationFund;
        const myAccountBalance = getTextValueById('account-balance');

        if( addMoney > myAccountBalance){
                alert("You don't have sufficient balance!!");
                return;
        }
        const availableBalance = myAccountBalance - addMoney ;
        document.getElementById('account-balance').innerText = availableBalance
        document.getElementById('donation-fund-three').innerText = donatedMoney ;

})