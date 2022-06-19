 const documentLoader = document.querySelector(".loading-page");
      window.addEventListener('load',()=>{
      setTimeout(()=>{
      documentLoader.classList.add("stop-loading");
      },3000)
      });