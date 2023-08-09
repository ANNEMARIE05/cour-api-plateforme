const contenair = document.querySelector('.contenair')

//pour paginer
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');
let maPage = null;

precedent.addEventListener('click', requette)
suivant.addEventListener('click', requette)
let page = document.getElementById('pag')


let lienbase = "https://api.themoviedb.org/3"
let apikey = "d604b2d9422a9eb0905fb7f615e0d7d3"

window.addEventListener('DOMContentLoaded', requette);

async function requette(event){
    if (event.target.id) {
       if (event.target.textContent.includes('Suivant')) {
            maPage = parseInt(event.target.id)+1;

            let data = await fetch(${lienbase}/discover/movie?page=${maPage}&api_key=${apikey})
            let results = await data.json()
            let res = results.results
            
            contenair.textContent ="";

            for (let i = 0; i < res.length; i++) {
                let madiv = document.createElement("a")
                madiv.classList.add("card")
                madiv.href = detail.html#${res[i].id}
                madiv.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${res[i].poster_path}" alt="">
                <div class="percent">

                </div>
                <div class="title">
                    <p>${res[i].title}</p>
                    <span>${res[i].release_date}</span>
                </div>
                `  
                contenair.appendChild(madiv)
            }
            suivant.id = maPage;
            page.textContent = maPage;
            precedent.id = maPage-1;
            if (maPage > 500) {
                suivant.disabled = true
            }else{
                suivant.disabled = false
            }
            precedent.disabled = false
        }else{
            maPage = parseInt(precedent.id);
            let data = await fetch(${lienbase}/discover/movie?page=${maPage}&api_key=${apikey})
            let results = await data.json()
            let res = results.results
            
            contenair.textContent ="";

            for (let i = 0; i < res.length; i++) {
                let madiv = document.createElement("a")
                madiv.classList.add("card")
                madiv.href = detail.html#${res[i].id}
                madiv.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${res[i].poster_path}" alt="">
                <div class="percent">

                </div>
                <div class="title">
                    <p>${res[i].title}</p>
                    <span>${res[i].release_date}</span>
                </div>
                `  
                contenair.appendChild(madiv)
            }
            suivant.id = maPage;
            page.textContent = maPage;
            precedent.id = maPage-1

            if (precedent.id == 0) {
                precedent.disabled = true
            }
            else{
                precedent.disabled = false
            }
            suivant.disabled = false
        }                                    
    }else{
        let data = await fetch(${lienbase}/discover/movie?api_key=${apikey})
        let results = await data.json()
        let res = results.results;
        for (let i = 0; i < res.length; i++) {
            let madiv = document.createElement("a")
            madiv.classList.add("card")
            madiv.href = detail.html#${res[i].id}
             madiv.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${res[i].poster_path}" alt="">
             <div class="percent">
     
             </div>
             <div class="title">
                 <p>${res[i].title}</p>
                 <span>${res[i].release_date}</span>
             </div>
             `  
             contenair.appendChild(madiv)
        }
         precedent.disabled = true
    }
    

    

}