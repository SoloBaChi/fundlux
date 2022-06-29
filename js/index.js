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
const displayTeamBio = document.querySelectorAll(".read-bio-cta");
const showBioText = document.querySelectorAll(".bio-text");

for(let member=0;member < displayTeamBio.length; member++){
 displayTeamBio[member].addEventListener("click",function(e){
  //console.log(e.target.id);
   showBioText.forEach(text => {
   	if(e.target.id === text.id){
   	 //console.log(text);
   	 text.classList.toggle("bio-text-clicked");
   	}
   	else{
   	text.classList.remove("bio-text-clicked");
   	}
   })
 })
}

