let Symbol = [ "asdfghjklpoiuytrewqzxcvbnm","ASDFGHKLPOIUYTREWQZXCVBNM","1234567890","!%^]*(}_/-={)]","@#$|&"]

let passWordLength = document.getElementById("length")
let inputs = Array.from(document.querySelectorAll("input")); 
let button = document.querySelector("button")
let password = document.querySelector(".show h2");
let clipboard = document.querySelector("i");

console.log(inputs) 
console.log(button) 
console.log(passWordLength)
console.log(password)
console.log(clipboard)

let i = 2;
passWordLength.addEventListener("keydown", (key) => {
    if ((key.key >= 0 && key.key <= 9) || key.code == "Backspace") 
    {
        if (key.code == "Backspace")
        {
            if (i != 0)
                --i;
        }
        else 
        {
            if (i < 2)    
                i++;       
            else if (i >= 2)
                key.preventDefault();
        }
    }
    else
        key.preventDefault();
});


passWordLength.addEventListener("click",()=>
{
    console.log("Its Clicked")
    let value = parseInt(passWordLength.getAttribute("value"));
    console.log(value)

    passWordLength.addEventListener("keydown",(key)=>
    {
        if(key.key == 8)
        {
            if(value<20)
                ++value; 
        }
        else if(key.key == 2)
        {
            if(value>5)
                --value;
        }
        passWordLength.setAttribute("value",`${value}`)
    });
    // passWordLength.style.cursor = "none";  
})


//Statements for thee checking
inputs.forEach(element => {
    element.addEventListener("click",()=>
    {
        console.log(`The attribute is set as : ${element.checked}`)
    })   
});


button.addEventListener("click",()=>
{
    let check = false
    let no = inputs[0].getAttribute("value")
    let passwordDemand = "";

    for(let x = 1;x<inputs.length;x++)
        if(inputs[x].checked)
        {
            check = true
            break
        }
    if(check)
    {
        let i=0;
        while(i<no)
        {
            let random = 1+(Math.floor(Math.random()*(inputs.length-1)));
            console.log(random)

            if(inputs[random].checked)
            {
                passwordDemand += Symbol[random-1].charAt(Math.floor(Math.random()*
                                Symbol[random-1].length));
                ++i;
                console.log(passwordDemand)
            }
        }
        password.textContent = `${passwordDemand}`
    }
});

clipboard.addEventListener("click",()=>
{
    navigator.clipboard.writeText(password.textContent);
    alert(`Dear, ${password.textContent} has been copied to ClipBoard`);
});