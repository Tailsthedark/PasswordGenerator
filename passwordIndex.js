let store = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","&",
"*","_","-"]
let key1 =""
let key2 =""
let randomIndex = Math.floor(Math.random()*store.length) 
let upper = document.getElementById("uppercase")
let lower = document.getElementById("lowercase")
let number = document.getElementById("number")
let special = document.getElementById("special")
function getuppercase(){
    return Math.floor(Math.random() * 26)//0-25
}
function getlowercase(){
    return Math.floor(Math.random() *26) + 26// 26-51
}
function getnumber(){
    return Math.floor(Math.random() * 10) + 52//52-61
}
function getspecial(){
    return Math.floor(Math.random() *9) + 62//62 - end of array

}
function check(type){
    if (type.checked)
    {
        return true
    }
    else
    {
        return false
    }
}
document.getElementById("generate-btn").addEventListener("click",function(){
    generatePassword()
})

function generatePassword(){
    let size = document.getElementById("length").value
    key1 = ""
    key2 = ""
    let a, b, c, d = 0
    do
    {
        a = Math.floor(Math.random() * size)
        b = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
        d = Math.floor(Math.random() * size)
    }
    while(a === b || a === c || a === d ||  b === c || b === d || d ===c)

    for (let i = 0; i < size; i++ ){
        if (i != a && i != b && i != c && i != d)
        {
            randomIndex = Math.floor(Math.random()*store.length)
            key1 += store[randomIndex] 
        }
        else
        {
            if ( i === a){
                x = getuppercase()
                key1 += store[x]
            }
            else if (i === b)
            {
                x = getlowercase()
                key1 += store[x]
            }
            else if (i === c)
            {
                x = getnumber()
                key1 += store[x]
            }
            else if (i === d)
            {
                x = getspecial()
                key1 += store[x]
            }
        }
    }
    do
    {
        a = Math.floor(Math.random() * size)
        b = Math.floor(Math.random() * size)
        c = Math.floor(Math.random() * size)
        d = Math.floor(Math.random() * size)
    }
    while(a === b || a === c || a === d ||  b === c || b === d || d ===c)

    for (let i = 0; i < size; i++ ){
        if (i != a && i != b && i != c && i != d)
        {
            randomIndex = Math.floor(Math.random()*store.length)
            key2 += store[randomIndex] 
        }
        else
        {
            if ( i === a){
                x = getuppercase()
                key2 += store[x]
            }
            else if (i === b)
            {
                x = getlowercase()
                key2 += store[x]
            }
            else if (i === c)
            {
                x = getnumber()
                key2 += store[x]
            }
            else if (i === d)
            {
                x = getspecial()
                key2 += store[x]
            }
        }
    }
    document.getElementById("o1").textContent = key1
    document.getElementById("o2").textContent = key2
}
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