let selection = document.querySelector("select");
let headerSection = document.querySelector("header");
let displayInfo = document.querySelector("#display-info");
let form = document.querySelector("form");
let selectUL = document.querySelector("ul");
let selectText = document.querySelector("#text-review");

let img = document.createElement("img");

img.src = "./images/ghibli-logo.png";
headerSection.append(img);

let url = `https://ghibliapi.herokuapp.com/films`;

fetch(url)
    .then(result => result.json())
    .then((data) => {
        let dataList = data;

        for(let d of dataList) {
            let option = document.createElement("option");
            option.value = d.title;
            option.textContent = d.title;
            selection.append(option);   
        }

        selection.addEventListener("change", (e)=> {
            for(let d of dataList) { 
                if(selection.value === d.title) {
                    let title = d.title;
                    let year = d.release_date;
                    let desc = d.description;

                    displayInfo.innerHTML = 
                    `
                    <h3>${title}</h3>
                    <p>${year}</p>
                    <p>${desc}</p>
                    `
                }
            }  
        })

        form.addEventListener("submit", (e)=> {
            e.preventDefault();
            let formMovieTitle = displayInfo.querySelector("h3").textContent;
            let createList = document.createElement("li");
            createList.innerHTML = 
            `
            <strong>${formMovieTitle}: </strong>${selectText.value}
            `
            selectUL.append(createList);
            selectText.value = "";
        })

    })
    .catch((error) => console.log(error));

   