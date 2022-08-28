/*Type 1: showing data directly with the loading of the page */
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data));

    function displayComments(comment){
        const showComment = document.getElementById('commentsList');
    
        comment.slice(0, 4).forEach(element => {

        const li = document.createElement('li') 
        
        li.innerHTML = `
        <h4>Id is: ${(element.id)}</h4>
        <p>Comment: ${(element.body)}</p>
        <button onclick="showDetail(${element.id})">Details</button>
        `
        li.style.backgroundColor="lightcyan";
        li.style.padding="15px";
        li.style.borderRadius="10px";
        li.style.margin="10px";
        showComment.appendChild(li);
    
        });
    }



    
/*Type 2: showing data with the clicking of a button */
const loadComment =() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayRestComments(data))
}

function displayRestComments(comment){
    let showComment = document.getElementById('newCommentsList');
    showComment.innerHTML =``;
    comment.slice(4, 20).forEach(element => {

        let li = document.createElement('li') ;
        
        li.innerHTML = `
        <h4>Id is: ${(element.id)}</h4>
        <p>Comment: ${(element.body)}</p>
        <button onclick="showDetail(${element.id})">Details</button>
        `
        li.style.backgroundColor="lightcyan";
        li.style.padding="10px";
        li.style.borderRadius="5px";
        li.style.margin="10px";
        showComment.appendChild(li);
        
    });
}



/* showing full details */
const showDetail = (id) => {

    const url = `https://jsonplaceholder.typicode.com/comments?id=${id}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => { 

    const showDetailDiv = document.getElementById('showDetailsDiv');
    
    showDetailDiv.innerHTML = `
    <h2>ID is : ${data[0].id}</h2>
    <h4>Name is : ${data[0].name}</h4>
    <p>Email is : ${data[0].email}</p>
`

    }); 
}