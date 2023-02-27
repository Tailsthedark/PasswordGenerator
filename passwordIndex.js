let store = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&",
"*","_","-"]
let key1 =""
let key2 =""
let randomIndex = Math.floor(Math.random()*store.length) 


//size.addEventListener("input", generatePassword)
function getuppercase(){
    return Math.floor(Math.random() * 26)//0 -25
}
function getlowercase(){
    let nev = (Math.floor(Math.random() *52) + 26)
    return nev
    // return (Math.floor(Math.random() *52) + 26)//26-51
}
function getnumber(){
    return (Math.floor(Math.random() * 62) + 36)//52-61
}
function getspecial(){
    return (Math.floor(Math.random() *store.length) + 62)//62 - end of array

}
document.getElementById("generate-btn").addEventListener("click",function(){
    generatePassword()
}
)
/*function generatePassword(){
    
    let size = document.getElementById("length")
    console.log(size.value)
    key1 =""
    key2 =""
    for ( let i = 0; i < size.value; i++)
    {
        randomIndex = Math.floor(Math.random()*store.length) 
        key1 += store[randomIndex]
    }
    for ( let i = 0; i < size.value; i++)
    {
        randomIndex = Math.floor(Math.random()*store.length) 
        key2 += store[randomIndex]
    }
    document.getElementById("o1").textContent = key1
    document.getElementById("o2").textContent = key2
    //document.getElementById("length").value = 0
}*/
function generatePassword(){
    let size = document.getElementById("length")
    let x = 0
    for (let i = 0; i < size.value/4; i++){
        x = getuppercase()
        key1 += store[x]
        x = getlowercase()
        key1 += store[x]
        x = getnumber()
        key1 += store[x]
        x = getspecial()
        key1 += store[x]
    }
    document.getElementById("o1").textContent = key1
}