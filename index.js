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

                // added to history
        const div = document.createElement('div');
        div.classList.add('container', 'mx-auto',  'md:w-8/12',  'border-2',  'border-gray-200', 'flex', 'justify-center' ,'my-5' , 'p-3', 'rounded-xl')
        div.innerHTML= `
                <div>
                        <h1 class='md:text-3xl text-xl font-bold'> Added ${addMoney} TK.donate for Flood at Noakhali, Bangladesh.Now your available balance ${availableBalance} tk. </h1>
                        ${new Date()}
                </div>
        `
        
        document.getElementById('history-container').appendChild(div)

        
})