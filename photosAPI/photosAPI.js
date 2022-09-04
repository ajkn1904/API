const photoUrl = ('https://jsonplaceholder.typicode.com/photos');
fetch(photoUrl)
.then(res => res.json())
.then (data => showPhotos(data));

const showPhotos = (data) => {
    
data.slice(0, 16).forEach(element => {
   // console.log(element);

    const showPhoto = document.getElementById('showPhotos');
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.width = '18rem';


    div.innerHTML = `
        <img src="${element.url}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <button class="btn btn-success" onclick='shoewPhotoDetails(${JSON.stringify (element.id)})'>Show Details</button>
        </div>
    `
    showPhoto.appendChild(div);
    
});
}



const shoewPhotoDetails = async id => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data = await res.json()
    console.log(data);

    const detailDiv = document.getElementById('detailsDiv');

    detailDiv.innerHTML = `
    <h2>Show Photo Details</h2>
    <img src="${data.url} class="card-img-top">
    <p>Thumbnail:</p>
    <img src="${data.thumbnailUrl}">

    <div class="card-body">
    <h3 class="card-title">${data.title}</h3>
    <p>ID: ${data.id}</p>
    `
}

