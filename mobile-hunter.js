const loadPhone = (value) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${value}`)
    .then(res => res.json())
    .then(data => showMobile(data));
}


const showMobile = (data) => {
    //console.log(data.data);
    
    const showMobileDiv = document.getElementById('show-phone');
    showMobileDiv.innerHTML = '';

    const foundMsg = document.getElementById('notFoundMsg');
    if(data.data.length === 0){
        foundMsg.classList.remove('d-none');
        showloader.classList.add('d-none');
    }
    else{
        foundMsg.classList.add('d-none');
        data.data.slice(0, 15).forEach(element => 
            {          
            const div = document.createElement('div');
            div.classList.add('col');
            
            div.innerHTML = `
            <div class="card">
                <img src="${element.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.phone_name}</h5>
                    <p>Brand: ${element.brand}</p>
                    <button class="btn btn-outline-success" onclick="showDetails('${element.slug}') "data-bs-toggle="modal" data-bs-target="#mobileDetailsModal">Details</button>
                </div>
            </div>
            `
            showMobileDiv.appendChild(div);
            }); 
    showloader.classList.add('d-none');

    }

}


const showDetails = (data) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${data}`)
    .then(res => res.json())
    .then(data => {
        loadModalData(data.data);
        //console.log(data.data)
    });
}

const loadModalData = (data) =>{
    const modalData = document.getElementById('mobileDetailsModalLabel');
    modalData.innerText = data.name;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML =`
        <h5>Brand: ${data.brand}</h5>
        <p>Release Date: ${data?.releaseDate ? data.releaseDate : 'Not Found'}</p>
        <p>Storage: ${data.mainFeatures.storage}</p>
        <p>Chipset: ${data.mainFeatures?.chipSet ? data.mainFeatures.chipSet : "Not Found"}</p>
        <p>Display: ${data.mainFeatures?.displaySize ? data.mainFeatures.displaySize : "Not Found"}</p>
        <p>Memory: ${data.mainFeatures?.memory ? data.mainFeatures.memory : "Not Found"}</p>
        
        <p>Sensors: ${data.mainFeatures?.sensors[0] ? data.mainFeatures.sensors[0]: ''}${data.mainFeatures.sensors[1] ? ', '+data.mainFeatures.sensors[1] : ''}${data.mainFeatures?.sensors[2] ? ', '+data.mainFeatures.sensors[2] : ''}${data.mainFeatures?.sensors[3] ? ', '+data.mainFeatures.sensors[3] : ''}${data.mainFeatures?.sensors[4] ? ', '+data.mainFeatures.sensors[4] : ''}${data.mainFeatures?.sensors[5] ? ', '+data.mainFeatures.sensors[5] : ''}${data.mainFeatures?.sensors[6] ? ', '+data.mainFeatures.sensors[6] : ''}</p>
    `
}

const showloader = document.getElementById('loader');
document.getElementById('searchPhoneBtn').addEventListener('click', function(){
    const textField = document.getElementById('searchPhone');
    const textFieldvalue = textField.value;
    loadPhone(textFieldvalue);
    showloader.classList.remove('d-none');

});
loadPhone('apple')