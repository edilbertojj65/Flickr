// Defining text characters for the empty and full hearts for you to use later.


document.addEventListener('DOMContentLoaded', function () {
  
  loadImages();
  
});

function loadImages( ) {
  //List Images
  //Get a list of images by using the /v2/list endpoint. 

  

  const myUrl = "https://picsum.photos/v2/list?page=1&limit=6"

  

  fetch(myUrl)
    .then(res=> res.json())
    .then((data) => {
         var i = 0 
         divContainer = document.getElementById("slideshow") 
         
         divStyle =  document.createElement("div")
         divStyle.setAttribute("style" , "text-align:center")
         document.body.appendChild(divStyle)
           

         for (const dataImage of data) {
           debugger
            i = i + 1.
            const n = Object.keys(data)
            const l = `${n.length}`
           
         //   header.innerText = `You finished ${finishedItems.length} items!`;
         div = document.createElement(`div`)
         div.className = "mySlides  fade"
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

         divCaption = document.createElement("div")
         divCaption.className = "text"
         divCaption.innerText = "Caption Three"
         divContainer.appendChild(divCaption)  

          
          newSpan = document.createElement('span')
          newSpan.setAttribute("class" , "dot")   
          newSpan.setAttribute("onclick" , "currentSlide(" + i + ")") 
          divStyle.appendChild( newSpan)


          var slideIndex = 1 
              showSlides(slideIndex) 

          // Next/previous controls
          function plusSlides(m) {
          showSlides(slideIndex += m) 

          }
          
          // Thumbnail image controls
          function currentSlide(m) {
          showSlides(slideIndex = m) 
          }

          function showSlides(m) {
            var j
            var slides = document.getElementsByClassName("mySlides") 
            var dots = document.getElementsByClassName("dot") 
            if (m > slides.length) {slideIndex = 1}
            if (m < 1) {slideIndex = slides.length}
            for (j = 0; j < slides.length; j++) {
                slides[j].style.display = "none" 
            }
            for (j = 0; j < dots.length; j++) {
                dots[j].className = dots[j].className.replace(" active", "") 
            }
            slides[slideIndex-1].style.display = "block" 
            dots[slideIndex-1].className += " active" 
          }



         function myFunction(event) { 
           debugger
          const target = event.target
        //  var expandImg = document.getElementById("expandedImg") 
         // var imgText = document.getElementById("imgtext") 
 
         //  expandedImg.src = target.currentSrc 
         //  imgtext.innerHTML = event.alt 
         //  expandedImg.parentElement.style.display = "block" 

           
        //   var Num = 0
        //   const likeButton = document.querySelector(".like-button")
         //  const likesCounter = document.getElementById(`likes`)
         //  likeButton.addEventListener("click" ,function(event){
           
          //  AddLikes() 
         //  } )

          // function AddLikes(){
          //  Num  = Num  + 1
          //  likesCounter.innerText = Num
               
         //  }
                
     }

      
      }
      


    });
    //////Empezar aqui
      divContainer = document.getElementById("slideshow") 
      a = document.createElement(`a`)
      a.setAttribute('class', 'prev')
      a.setAttribute('onclick', 'plusSlides(-1)"<&#10094')
      divContainer.appendChild(a)

      a = document.createElement(`a`)
      a.setAttribute('class', 'next')
      a.setAttribute('onclick', 'plusSlides(1)"❯&#10095')
      divContainer.appendChild(a)

      
      
     //  divCationContainer = document.createElement(`div`)
     //  divCationContainer.className = "caption-container"
     //  document.body.appendChild(divCationContainer)

     //  p = document.createElement(`p`)
     //  divCationContainer.appendChild(p)

        
   
       
  
}

