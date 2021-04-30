
 


function myPosts (){
    let post = "https://jsonplaceholder.typicode.com/posts";                                                                        
    


    fetch (post)
    .then(res => res.json())
    .then(data => {
        let posts = '';
        data.forEach(element => {
            posts += `<div class= "post-card">
            <ul>
                <li  class ="post-list">${element.body}</li>
                <li  class ="post-list">${element.id}</li>
                <li  class ="post-list">${element.title}</li>
                <li  class ="post-list">${element.userId}</li>
            </ul>
            </div>`

        document.getElementById('posts').innerHTML = posts;
        });
    
        console.log(post);
    });
}




function myComments (){
    let comment = "https://jsonplaceholder.typicode.com/comments";
    


    fetch (comment)
    .then(res => res.json())
    .then(data => {
        let comments = '';
        data.forEach(element => {
            comments += `<div class= "comment-card">
            <ul>
                <li  class ="comment-list">${element.body}</li>
                <li  class ="comment-list">${element.email}</li>
                <li  class ="comment-list">${element.id}</li>
                <li  class ="comment-list">${element.name}</li>
                <li  class ="comment-list">${element.postId}</li>
            </ul>
            </div>`

        document.getElementById('comments').innerHTML = comments;
        });
    
        console.log(comment);
    });
}

function myAlbums (){
    let album = "https://jsonplaceholder.typicode.com/albums";
    


    fetch (album)
    .then(res => res.json())
    .then(data => {
        let albums = '';
        data.forEach(element => {
            albums += `<div class= "album-card">
            <ul>
                <li  class ="album-list">${element.id}</li>
                <li  class ="album-list">${element.title}</li>
                <li  class ="album-list">${element.userId}</li>
            </ul>
            </div>`

        document.getElementById('albums').innerHTML = albums;
        });
    
        console.log(album);
    });

  
    
}

function myPhotos (){
    let photo = "https://jsonplaceholder.typicode.com/photos";
    


    fetch (photo)
    .then(res => res.json())
    .then(data => {
        let photos = '';
        data.forEach(element => {
            photos += `<div class= "photo-card">
            <ul>
                <li  class ="todo-list1">${element.albumId}</li>
                <li  class ="todo list">${element.id}</li>
                <li  class ="todo-list">${element.thumbnailUrl}</li>
                <li  class ="todo-list">${element.title}</li>
                <li  class ="todo-list">${element.url}}</li>
            </ul>

                
            </div>`

        document.getElementById('photos').innerHTML = photos;
        });
    
        console.log(photo);

         
    
       
    });
     
}

function myTodos (){
    let todo = "https://jsonplaceholder.typicode.com/todos";
    


    fetch (todo)
    .then(res => res.json())
    .then(data => {
        let todos = '';
        data.forEach(element => {
            todos += `<div class= "todo-card">
            <ul>
                <li  class ="todo-list1">${element.completed}</li>
                <li  class ="todo list">${element.id}</li>
                <li  class ="todo-list">${element.title}</li>
                <li  class ="todo-list">${element.userId}</li>
            </ul>
            </div>`

        document.getElementById('todos').innerHTML = todos;
        });
    
    
    });

  
    console.log(todo);
}

function myUsers() {
    let user = "https://jsonplaceholder.typicode.com/users";
    


    fetch (user)
    .then(res => res.json())
    .then(data => {
        let users = '';
        data.forEach(element => {
            users += `<div class= "user-card">
            <ul>
                <li  class ="user-list1">${element.name}</li>
                <li  class ="user list">${element.phone}</li>
                <li  class ="user-list">${element.website}</li>
                <li  class ="user-list">${element.username}</li>
                <li  class ="user-list">${element.email}</li>
                <li  class ="user-list">${element.address.street}</li>
                <li  class ="user-list">${element.company.name}</li>
            </ul>
            </div>`

        document.getElementById('users').innerHTML = users;
        });
    
        console.log(user);
    });

  
};