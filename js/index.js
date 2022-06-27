 const documentLoader = document.querySelector(".loading-page");
      window.addEventListener('load',()=>{
      setTimeout(()=>{
      documentLoader.classList.add("stop-loading");
      },3000)
      });

const scrollTop = document.getElementById("main-menu");
window.addEventListener("scroll",()=>{
 if(scrollY > 307){
 	scrollTop.classList.add("main-menu-scrollTop");
 }
 else{
 scrollTop.classList.remove("main-menu-scrollTop");
 }
})
   