let cap = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z"]
let smal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z"]
let nos = ["0","1","2","3","4","5","6","7","8","9"]
let speco = ["!","@","#","$","%","&","*","_","-"]
let key1 =""
let key2 =""
let capflag = 1
let smalflag = 1
let nosflag = 1
let specoflag = 1


function getuppercase(){
    let y = Math.floor(Math.random() * cap.length)
    return y 
}
function getlowercase(){
    let y = Math.floor(Math.random() *smal.length)
    return y
}
function getnumber(){
    let y = Math.floor(Math.random() * nos.length)
    return y
}
function getspecial(){
    let y =  Math.floor(Math.random() * speco.length) 
    return y 

}

function capflagch(){
    if(capflag === 1){
        capflag = 0
    }
    else if(capflag === 0)
    {
        capflag = 1
    }
}
function smalflagch(){
    if(smalflag === 1){
        smalflag = 0
    }
    else if (smalflag === 0)
    {
        smalflag = 1
    }
}
function nosflagch(){
    if(nosflag === 1){
        nosflag = 0
    }
    else if (nosflag === 0)
    {
        nosflag = 1
    }
}
function specoflagch(){
    if(specoflag === 1){
        specoflag = 0
    }
    else if (specoflag === 0)
    {
        specoflag = 1
    }
}
function generatePassword(){
    key1 =""
    key2 =""
    if(capflag === 0 && smalflag === 0 && nosflag === 0 && specoflag === 0)
    {
        document.getElementById("o1").textContent = key1
        document.getElementById("o2").textContent = key2
        return;
    }
    let size = document.getElementById("length")
    let x = 0
    let y = 0
    for (let i = 0; i < size.value; i++){
        let choice = Math.floor(Math.random() * 4)
        switch (choice){
            case 0:
                if(capflag === 0){
                    i -= 1
                    break;
                }
                else if(capflag === 1){
                x = getuppercase()
                key1 += cap[x]
                x = getuppercase()
                key2 += cap[x]
                break;
                }   
            case 1:
                if(smalflag === 0){
                    i -= 1
                    break;
                }
                else if(smalflag === 1){
                    x = getlowercase()
                    key1 += smal[x]
                    x = getlowercase()
                    key2 += smal[x]
                    break;
                }
            case 2:
                if(nosflag === 0){
                    i -= 1
                    break;
                }
                else if(nosflag === 1){
                    x = getnumber()
                    key1 += nos[x]
                    x = getnumber()
                    key2 += nos[x]
                    break;
                }
            case 3:
                if(specoflag === 0){
                    i -= 1
                    break;
                }
                else if(specoflag === 1){
                    x = getspecial()
                    key1 += speco[x]
                    x = getspecial()
                    key2 += speco[x]
                    break;
                }
        }  
    }
    document.getElementById("o1").textContent = key1
    document.getElementById("o2").textContent = key2
}