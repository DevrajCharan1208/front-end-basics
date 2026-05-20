async function GetFacts() {
    try{
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        return data.fact;
    }catch(err){
        console.log("Error :", err);
        return "No fact found";
    }    
}

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let fact = await GetFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
 