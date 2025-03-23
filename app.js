//* Activity using query string parameters

let url = "https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let input = document.querySelector("input");
let list  = document.querySelector("#list");

btn.addEventListener("click", async () => {
    let country = input.value;
    console.log(country);
    let unvArry = await getUniversity(country);
    show(unvArry); 
});

function show(unvArry) {
    list.innerText = "";
    for(unv of unvArry) {
        console.log(unv.name);

        let li = document.createElement("li");
        li.innerText = unv.name;
        list.appendChild(li);
    }
}

async function getUniversity(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch (e) {
        console.log('ERROR -',e);
        return [];
    }
}
    