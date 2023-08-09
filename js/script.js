let container = document.querySelector(".container")
let varDeBase = "https://api.themoviedb.org/3/";
let token = "d604b2d9422a9eb0905fb7f615e0d7d3"
let lien = "https://image.tmdb.org/t/p/w500";
let page = 1;
let datas = [];

// https:api.themoviedb.org/3/movie/157336?api_key=d604b2d9422a9eb0905fb7f615e0d7d3

window.addEventListener('DOMContentLoaded' , async () => {
  let result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d604b2d9422a9eb0905fb7f615e0d7d3&page=2')
  console.log(result);
  let nouvel = await result.json();
  console.log(nouvel.results)

  let tableau = nouvel.results
  datas.push(dataObjet={page:datas})

  function display(){
    if(page == 1){
      container.innerHTML = ""
    }
    let tableau = datas.find((l) => l.page == page)

    for (let i = 0; i <tableau.length; i++) {
      let div = document.createElement('div')
      div.classList.add("card")
      div.innerHTML=`
        <div class="image">
          <img src="https://image.tmdb.org/t/p/w500${tableau[i].backdrop_path}" alt="">
        </div>
        <div class="Title">
          <p>${tableau[i].title}</p>
          <span>${tableau[i].release_date}</span>
        </div>
      `
      container.appendChild(div)
    }
  }




})