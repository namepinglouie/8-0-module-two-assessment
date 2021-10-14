let selection = document.querySelector("select");
let headerSection = document.querySelector("header");
let displayContent = document.querySelector("#content");

let img = document.createElement("img");
img.src = "./images/ghibli-logo.png";
headerSection.append(img);

let url = `https://ghibliapi.herokuapp.com/films`;

fetch(url)
    .then(result => result.json())
    .then((data) => {
        let dataList = data;

        for(let d of dataList) {
            //console.log(d);
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

                    displayContent.innerHTML = 
                    `
                    <h3>${title}</h3>
                    <p>${year}</p>
                    <p>${desc}</p>
                    `
                }
            }



            
        })
    })
    .catch((error) => console.log(error));

   