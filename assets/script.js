const dropdown=document.querySelector('.dropdown');
dropdown.addEventListener('click',()=>
// ()=> ====  function()
{
    dropdown.classList.toggle('actif');
})
// skill
let number =document.getElementById('number');
let counter=0;

setInterval(()=>{
    if(counter==65)
    {
        clearInterval;
    }
    else{
        counter+=1;
        number.innerHTML=`${counter}%`;
    }
 
},30);
// json-------------------
const  umumisection = document.querySelector('.cards')
window.addEventListener("DOMContentLoaded",getAllTestimonials)

async function getAllTestimonials(){  
    const unvan="./assets/reyler.json"
   
    try{
        const gelenmelumatlar = await fetch(unvan)

        const understand=await gelenmelumatlar.json()
        // console.table(understand)
        for(let i=0; i<understand.length; i++){
            umumisection.innerHTML += `<div class="card">
            <img src="${understand[i].musteri_img}" alt="" />
            <h1>${understand[i].musteri_adi}</h1>
            <h3>${understand[i].musteri_isi}</h3>
            <p>${understand[i].musteri_reyi}</p>
            
            <button type="submit">${understand[i].button}</button>
            <div class="div"></div>
        </div>`
        }

    }
    catch(error){
        console.log(error)
    }
}

// accordion--------------


const accordion=document.getElementsByClassName("accordion")
console.log(accordion)
// i++ increment
// i-- decrement
for(let i=0;i<accordion.length;i++)
{
    accordion[i].addEventListener("click",function(){
      // kliklediyimizi referans alarir
        this.classList.toggle("active")

        let panel=this.nextElementSibling
        //ilk usul
        // if(panel.style.display=="block")
        // {
        //     panel.style.display="none"
        // }
        // else{
        //     panel.style.display="block"
        // }
        if(panel.style.maxHeight)
        {
          
            panel.style.maxHeight = null
        }
        else {
            panel.style.maxHeight = `${panel.scrollHeight}px`
            console.log(panel.scrollHeight)
        }
    })
}


// slideshoww
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// curtain menu
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }




