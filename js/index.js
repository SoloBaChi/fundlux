 const documentLoader = document.querySelector(".loading-page");
      window.addEventListener('load',()=>{
      setTimeout(()=>{
      documentLoader.classList.add("stop-loading");
      },1000)
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
   

/*Team members js*/
// Get the display button elements
const displayTeamBio = document.querySelectorAll(".read-bio-cta");

// Get the paragrap elements with .bio-text class
const showBioText = document.querySelectorAll(".bio-text");

for(let member=0;member < displayTeamBio.length; member++){
 displayTeamBio[member].addEventListener("click",function(e){
   showBioText.forEach(text => {

   	//check if the id of the button matches with the targetted paragraph id
   	(e.target.id === text.id) ? text.classList.toggle("bio-text-clicked") :
    
    //if both ids doesn't match return this
   	  text.classList.remove("bio-text-clicked");
   })
 })
}

