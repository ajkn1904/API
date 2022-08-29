const showUser = () =>{
    fetch('https://randomuser.me/api/?gender=male')
    .then(res => res.json())
    .then(data => {showImg(data)
});
}



const showImg = (data) =>{
    const showImg = document.getElementById('showImage')
    showImg.innerHTML = ``;

    showImg.innerHTML = `
    <img src="${data.results[0].picture.large}">
    <br>
    <button onclick='showDetails(${JSON.stringify(data)})'>Details</button>
    `
    const details = document.getElementById('showDetailsDiv');
    details.innerHTML = ``;
}



const showDetails = (element) =>{
   const details = document.getElementById('showDetailsDiv');

    details.innerHTML = `
    <h4>Name : ${element.results[0].name.title} ${element.results[0].name.first} ${element.results[0].name.last}</h4>
    <p>Age : ${element.results[0].dob.age}</p>
    <p>Gender : ${element.results[0].gender}</p>
    <p>Email : ${element.results[0].email}</p>
    <p>Phone : ${element.results[0].phone}</p>
    <p>Street Number: ${element.results[0].location.street.number}</p>
    <p> Street Name: ${element.results[0].location.street.name}</p>
    <p>Postcode: ${element.results[0].location.postcode}</p>
    <p>City: ${element.results[0].location.city}</p>
    <p>State: ${element.results[0].location.state}</p>
    <p>Country: ${element.results[0].location.country}</p>
    <p>Latitude: ${element.results[0].location.coordinates.latitude},  Longitude: ${element.results[0].location.coordinates.longitude}</p>
    <p>Timezone Offset: ${element.results[0].location.timezone.offset}</p>
    <p>Timezone Description: ${element.results[0].location.timezone.description}</p> 
 
    `

}