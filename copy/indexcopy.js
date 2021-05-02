// Defining text characters for the empty and full hearts for you to use later.


document.addEventListener('DOMContentLoaded', function () {
  debugger
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
         for (const dataImage of data) {
           i = i + 1
         div = document.createElement(`div`)
         div.id = "column"
         div.className = "column"
         img = document.createElement("img") 
         img.src = `${dataImage.download_url}`
         img.alt = `${dataImage.author}`
         img.style = "width:25%"
         img.className = "hover-shadow"
         
        
         img.addEventListener('click', myFunction) 
         div.appendChild(img)
         span = document.createElement("span")
         
         span.id = "displayCount"
         div.appendChild(span)
       //  var input = document.createElement("input")
       
      //    input.type = "buttom"
      //    input.value = "Likes"
      //    input.id = "countButton" 
       //   span.appendChild(input)
          
        
         document.getElementById("row").appendChild(div)
         
         function myFunction(event) { 
          debugger
           
          const target = event.target
          var expandImg = document.getElementById("expandedImg") 
          var imgText = document.getElementById("imgtext") 
 
           expandedImg.src = target.currentSrc 
           imgtext.innerHTML = event.alt 
           expandedImg.parentElement.style.display = "block" 
           
        
     }

       
      
      }
      
    });

}

