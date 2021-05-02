// Execute the event listener after DOM is load 
document.addEventListener('DOMContentLoaded', function () {
  
  loadImages();
  
});


function loadImages( ) {
  //List Images
  //Get a list of images by using the /v2/list endpoint. 

  const myUrl = "https://picsum.photos/v2/list?page=2&limit=100"
  fetch(myUrl)
    .then(res=> res.json())
    .then((data) => {

         var i = 0 
         divContainer = document.getElementById("slideshow") 
         
         for (const dataImage of data) {
            
            i = i + 1.
        const n = Object.keys(data)
         const l = `${n.length}`
           
         div = document.createElement(`div`)
         div.className = "mySlides  fade"
         div.id = "fade"
         divContainer.appendChild(div)
          

         div = document.createElement(`div`)
         div.className = "numbertext"
         div.id = "numText"
         divContainer.appendChild(div)

         img = document.createElement("img") 
         img.src = `${dataImage.download_url}`
         img.alt = `${dataImage.author}`
         img.style = "width:25%"
         img.className = "hover-shadow"
         img.addEventListener('click', myFunction) 
         divContainer.appendChild(img) 

         divCaption = document.createElement("div")
         divCaption.className = "text"
         divCaption.innerText = `${i} / ${l}`
         divContainer.appendChild(divCaption)  

          
          
         function myFunction(event) { 

          const target = event.target
          var expandedImg = document.getElementById("expandedImg") 
          var imgText = document.getElementById("imgtext") 
           expandedImg.src = target.currentSrc 
           imgtext.innerHTML = target.alt 
           expandedImg.parentElement.style.display = "block" 

        
           var Num = 0
           const container = document.getElementById("conta")
           const likeButton = document.querySelector(".like-button")
           const likesCounter = document.getElementById(`likes`)


           likeButton.addEventListener("click" ,function(event){
           AddLikes() 
          } )

           function AddLikes(){
            Num  = Num  + 1
            likesCounter.innerText = Num + "  Like!"
               
          }
                
     }

      
      }
      


    });
    
        
   
       
  
}

