let screen = document.querySelector(".screen")
let count=0;
let table = 
[`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis laudantium quasi laboriosam aperiam ea deserunt, officia doloremque dignissimos libero eos a ab maiores suscipit corporis consectetur rerum quos ipsum nam.`,
`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni dolores molestiae minima consequatur veritatis, iure nostrum harum cum mollitia, eius omnis modi quisquam blanditiis eligendi aliquid quos iusto odio cumque!`,
`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita adipisci praesentium laboriosam dicta iure, facilis dolorum consectetur sit distinctio nostrum fugit totam dignissimos. Libero necessitatibus ut molestias assumenda dicta temporibus.`,
`Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae est, rem magnam exercitationem molestias, accusantium optio officiis repudiandae provident quae culpa, neque nihil ipsum fugit veritatis eos obcaecati at!`,
`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi inventore suscipit, facere consectetur a explicabo eum expedita repellendus, provident labore iste corporis esse nostrum quae tenetur dolor doloribus sint error .`]



document.addEventListener("DOMContentLoaded", (e)=>{
    screen.textContent = table[count]
})

screen.addEventListener("scroll", (e)=>{

    if(e.currentTarget.scrollTop+e.currentTarget.clientHeight>e.currentTarget.scrollHeight-20){
        count = count == table.length-1 ? 0 :count+1
        screen.textContent +=table[count]
    }
})






// screen.addEventListener('scroll', function (e) {
//     console.log(e.currentTarget.scrollTop)
//     console.log(e.currentTarget.scrollHeight);
//     console.log(e.currentTarget.clientHeight);
//     console.log(e.currentTarget.clientWidth);
//     console.log(e.currentTarget.scrollTop+e.currentTarget.clientHeight);
//     console.log(e.currentTarget.scrollHeight);
// })