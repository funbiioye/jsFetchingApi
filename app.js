
 


function myPosts (){
    let posts = "https://jsonplaceholder.typicode.com/posts";
    


    fetch (posts)
    .then(res => res.json())
    // .then(function myFunction (){
    //     var myJson = JSON.stringify(posts);
    //     var result = [];
    
    //     for (var i in myJson)
    //         result.push([i, myJson [i]]);
    // })
    .then(posts => {document.getElementById('posts').innerHTML = JSON.stringify(posts) });

  
    console.log(posts);
}

// myFunction();


function myComments (){
    let comments = "https://jsonplaceholder.typicode.com/comments";
    


    fetch (comments)
    .then(res => res.json())
    // .then(function myFunction (){
    //     var myJson = JSON.stringify(comments);
    //     var result = [];
    
    //     for (var i in myJson)
    //         result.push([i, myJson [i]]);
    // })
    .then(comments => {document.getElementById('comments').innerHTML = JSON.stringify(comments) });

  
    console.log(comments);
}

function myAlbums (){
    let albums = "https://jsonplaceholder.typicode.com/albums";
    


    fetch (albums)
    .then(res => res.json())
    // .then(function myFunction (){
    //     var myJson = JSON.stringify(albums);
    //     var result = [];
    
    //     for (var i in myJson)
    //         result.push([i, myJson [i]]);
    // })
    .then(albums => {document.getElementById('albums').innerHTML = JSON.stringify(albums) });

  
    console.log(albums);
}

function myPhotos (){
    let photos = "https://jsonplaceholder.typicode.com/photos";
    


    fetch (photos)
    .then(res => res.json())
    // .then(function myFunction (){
    //     var myJson = JSON.stringify(photos);
    //     var result = [];
    
    //     for (var i in myJson)
    //         result.push([i, myJson [i]]);
    // })
    .then(photos => {document.getElementById('photos').innerHTML = JSON.stringify(photos) });

  
    console.log(photos);
}

function myTodos (){
    let todos = "https://jsonplaceholder.typicode.com/todos";
    


    fetch (todos)
    .then(res => res.json())
    // .then(function myFunction (){
    //     var myJson = JSON.stringify(todos);
    //     var result = [];
    
    //     for (var i in myJson)
    //         result.push([i, myJson [i]]);
    // })
    .then(todos => {document.getElementById('todos').innerHTML = JSON.stringify(todos) });

  
    console.log(todos);
}

function myUsers (){
    let users = "https://jsonplaceholder.typicode.com/users";
    


    fetch (users)
    .then(res => res.json())
    // .then(function myFunction (){
    //     var myJson = JSON.stringify(users);
    //     var result = [];
    
    //     for (var i in myJson)
    //         result.push([i, myJson [i]]);
    // })
    .then(users => {document.getElementById('users').innerHTML = JSON.stringify(users) });

  
    console.log(users);
}