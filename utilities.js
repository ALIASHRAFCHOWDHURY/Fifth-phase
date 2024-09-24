function getInputValueById(id){
        const inputValue = document.getElementById(id).value ;
        const inputNumber = parseFloat(inputValue)
        return inputNumber ;
}

function getTextValueById(id){
        const TextValue = document.getElementById(id).innerText ;
        const TextNumber = parseFloat(TextValue)
        return TextNumber ;
}