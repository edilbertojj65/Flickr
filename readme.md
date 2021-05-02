  	Project Flickr

The application Flickr your functionality is create a photo gallery, and will  can reach them  using   the API “Lorem Picsum” , and getting  a list of images by using the /v2/list endpoint
The URL is  https://picsum.photos/v2/list. the next is the Json structure

[
    {
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/...",
        "download_url": "https://picsum.photos/..."
    }
]

The API will return 30 items per page by default.
To request another page, use the ?page parameter.
To change the amount of items per page, use the  ?limit parameter.
The application use to  by default URL : https://picsum.photos/v2/list?page=2&limit=100


The first step

The JavaScript code is execute after DOM ( Document object model ) is load, with event document.addEventListner, and call function load images().     

 

The second step 
Inside the function  loadImages set up the process of communicating with the server , the asynchronous way and using the function called  fetch , and returning an object that represent of data source sent back  in format JSON 
 

The third   step. 
In this step is interacting with DOM using JavaScript and rewrite document elements , creating the new DOM structure .
 
 
Fourth step.
In this step is the function definition  called by event click listener over each imagen pick 
and expand it. 
 


Fifth step.
In this step is the event that count click  over image pick.
 

