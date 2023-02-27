let store = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&",
"*","_","-"]
let key1 =""
let key2 = ""

let lowerCase = {max:25, min:0}
let upperCase = {max:51, min:26}
let numberCase = {max:61, min:52}
let specialCase = {max:62, min:(store.length - 1)}

function returnIndex(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

document.getElementById("generate-btn").addEventListener("click",function(){
    generatePassword()
}

)
function generatePassword(){
    // Reformat the strings on each function call
    key1 = ""
    key2 = ""

    let size = document.getElementById("length").value
    for (let i = 0; i < size; i++){
        // 0 == lower case
        // 1 == upper case
        // 2 == number case
        // 3 == special case
        let chooseCase = Math.floor(Math.random() * 4)
        switch (chooseCase) {
            case 0:
                key1 += store[returnIndex(lowerCase.max, lowerCase.min)]; 
                key2 += store[returnIndex(lowerCase.max, lowerCase.min)]; 
                break;
            case 1:
                key1 += store[returnIndex(upperCase.max, upperCase.min)]; 
                key2 += store[returnIndex(upperCase.max, upperCase.min)]; 
                break;
            case 2:
                key1 += store[returnIndex(numberCase.max, numberCase.min)]; 
                key2 += store[returnIndex(numberCase.max, numberCase.min)]; 
                break;
            case 3:
                key1 += store[returnIndex(specialCase.max, specialCase.min)]; 
                key2 += store[returnIndex(specialCase.max, specialCase.min)]; 
                break;
        }
    }

    document.getElementById("o1").textContent = key1
    document.getElementById("o2").textContent = key2
}