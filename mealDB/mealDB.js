function showMeals(data){
    
    const mealDiv = document.getElementById('mealsDiv');
    mealDiv.innerHTML = ``;
    
   
    const noItemFoundMsg = document.getElementById('notFoundMsg');     
    if(data === null){
        noItemFoundMsg.classList.remove('d-none');
        loader.classList.add('d-none');
    }
    else{
        noItemFoundMsg.classList.add('d-none');
    }
    
    
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card');
        
        div.innerHTML = `
            <img src="${element.strMealThumb}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${element.strMeal}</h5>
            <button class="btn btn-primary" data-bs-toggle="modal" data data-bs-target="#mealDetailModal" onclick='showDetails(${JSON.stringify (element)})'>Show Details</button>
        </div>
        `
        mealDiv.appendChild(div);
    });
    loader.classList.add('d-none');

}



function showDetails(data) {  

    const modalTitel = document.getElementById('mealDetailModalLabel');
    modalTitel.innerText = `${data.strMeal}`;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img src="${data.strMealThumb}" class="img-fluid">
        <h4>Meal Id: ${data.idMeal}</h4>
        <h5>origin: ${data.strArea}</h5>
        <h5>Food Type: ${data.strTags}</h5>
        <p>Recipe: ${data.strInstructions}</p>
    `
}




const loader  = document.getElementById('loader');

document.getElementById('searchMealBtn').addEventListener('click', function(){
    const searchField = document.getElementById('searchMeal');
    const searchFieldValue = searchField.value;

    loader.classList.remove('d-none');

    loadMeal(searchFieldValue);
    searchField.value='';
});



const loadMeal = (value) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then(res => res.json())
    .then(data => showMeals(data.meals));
}


loadMeal('');