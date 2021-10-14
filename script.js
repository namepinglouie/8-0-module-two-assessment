let selection = document.querySelector("#titles");
let headerSection = document.querySelector("header");
let img = document.createElement("img");
img.src = "./images/ghibli-logo.png";
headerSection.append(img);

let url = `https://ghibliapi.herokuapp.com/films`;

fetch(url)
    .then(result => result.json())
    .then((data) => {
        let dataList = data;
        for(let data of dataList) {
            let option = document.createElement("option");
            option.value = data.title.toLowerCase().split(" ").join("-");
            option.textContent = data.title;
            selection.append(option);
        }
    })