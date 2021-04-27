// Defining text characters for the empty and full hearts for you to use later.


document.addEventListener('DOMContentLoaded', function () {
  
  loadImages();
  
});

function loadImages( ) {
  //List Images
  //Get a list of images by using the /v2/list endpoint. 
  const myUrl = "https://picsum.photos/v2/list?page=2&limit=5"
   
  fetch(myUrl)
    .then(res=> res.json())
    .then((data) => {
         var i = 0 
         divContainer = document.getElementById("slideshow") 
         for (const dataImage of data) {
            i = i + 1.
            const n = Object.keys(data)
            const l = `${n.length}`
           
         //   header.innerText = `You finished ${finishedItems.length} items!`;
         div = document.createElement(`div`)
         div.className = "mySlides"
         div.id = "fade"
         divContainer.appendChild(div)
          

         div = document.createElement(`div`)
         div.className = "numbertext"
         div.innerText = `${i} / ${l}`
         div.id = "numText"
         divContainer.appendChild(div)

         img = document.createElement("img") 
         img.src = `${dataImage.download_url}`
         img.alt = `${dataImage.author}`
         img.style = "width:25%"
         img.className = "hover-shadow"
         img.addEventListener('click', myFunction) 
         divContainer.appendChild(img) 

         div = document.createElement(`div`)
         div.className = "text"
         div.id = "texCaption"
         divContainer.appendChild(div)
         
        // div.appendChild(img)
       //  span = document.createElement("span")
         
        // span.id = "displayCount"
        // div.appendChild(span)
       //  var input = document.createElement("input")
       
      //    input.type = "buttom"
      //    input.value = "Likes"
      //    input.id = "countButton" 
       //   span.appendChild(input)
          
        
        
         
         function myFunction(event) { 
          
           
          const target = event.target
          var expandImg = document.getElementById("expandedImg") 
          var imgText = document.getElementById("imgtext") 
 
           expandedImg.src = target.currentSrc 
           imgtext.innerHTML = event.alt 
           expandedImg.parentElement.style.display = "block" 
          var slideIndex = 1 
          showSlides(slideIndex) 
          
          // Next/previous controls
          function plusSlides(t) {
            showSlides(slideIndex += t) 
          }
          
          // Thumbnail image controls
          function currentSlide(t) {
            showSlides(slideIndex = t)
          }
          
          function showSlides(t) {
            var j 
            var slides = document.getElementsByClassName("mySlides") 
            var dots = document.getElementsByClassName("dot") 
            if (t > slides.length) {slideIndex = 1}
            if (t < 1) {slideIndex = slides.length}
            for (j = 0; j < slides.length; j++) {
                slides[j].style.display = "none" 
            }
            for (j = 0; j < dots.length; j++) {
                dots[j].className = dots[j].className.replace(" active", "") 
            }
            slides[slideIndex-1].style.display = "block" 
            dots[slideIndex-1].className += " active" 
          }



           
        
     }

       
      
      }
      
    });

}

