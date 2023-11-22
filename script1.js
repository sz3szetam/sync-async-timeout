function displayer (callback)
{
    const div = document.getElementById("display");
    div.innerHTML = `<div class="size fekete"></div>`;
    callback();
    div.innerHTML += `<div class="size sarga"></div>`;

    
}
function syncFunction()
{
    const div = document.getElementById("display");
    div.innerHTML += `<div class="size piros"></div>`;
}


function asyncFunction()
{
    
    setTimeout(()=>{
        const div = document.getElementById("display");
    div.innerHTML += `<div class="size piros"></div>`;
    },2000);

}