function getItemFromLocalStorage(data){
return localStorage.getItem(data);

}

let theCount = 0;
document.getElementById('btn-increase').addEventListener('click', function(){
    let increaser = theCount++;
    localStorage.setItem('the count', increaser);

    const showData = getItemFromLocalStorage('the count');
    const addPara = document.getElementById('increase-paragraph');
    const li = document.createElement('li');
    li.innerText = showData;
    
    addPara.appendChild(li);
    
});




function valueFromInputField(id){
    const textFieldStr = document.getElementById(id);
    const textFieldValue = textFieldStr.value;
    textFieldStr.value = '';
    return textFieldValue;
}

function showData(id, key){
    const showValue = getItemFromLocalStorage(key);

    const addPara = document.getElementById(id);
    let paragraph = document.createElement('p')
    paragraph.innerText = showValue;
    addPara.appendChild(paragraph);
}

function setToLocalStorage(key, value){
    window.localStorage.setItem(key, value);
}

document.getElementById('btn-add-name').addEventListener('click', function(){
    const fieldValue = valueFromInputField('name-field');
    setToLocalStorage('name', fieldValue);
    showData('show-name-paragraph', 'name');
});

document.getElementById('btn-add-email').addEventListener('click', function(){
    const fieldValue = valueFromInputField('email-field');
    setToLocalStorage('email', fieldValue);
    showData('show-email-paragraph', 'email');
});

document.getElementById('btn-add-message').addEventListener('click', function(){
    const fieldValue = valueFromInputField('message-field');
    setToLocalStorage('message', fieldValue);
    showData('show-message-paragraph', 'message');
});

showData('show-name-paragraph', 'name');
showData('show-email-paragraph', 'email');
showData('show-message-paragraph', 'message');




document.getElementById('btn-send').addEventListener('click', function(){
    const nameFieldValue = valueFromInputField('name-field');
    setToLocalStorage('name', nameFieldValue);
    showData('show-name-paragraph', 'name');

    const emailFieldValue = valueFromInputField('email-field');
    setToLocalStorage('email', emailFieldValue);
    showData('show-email-paragraph', 'email');

    const messageFieldValue = valueFromInputField('message-field');
    setToLocalStorage('message', messageFieldValue);
    showData('show-message-paragraph', 'message');
    
});





function deleteParagraphData(id){
    const addPara = document.getElementById(id);
    addPara.innerHTML = '';
}

function deletFromLocalStorage(key){
    window.localStorage.removeItem(key);
}

document.getElementById('btn-delet-name').addEventListener('click', function(){
    deletFromLocalStorage('name');
    deleteParagraphData('show-name-paragraph');
});

document.getElementById('btn-delet-email').addEventListener('click', function(){
    deletFromLocalStorage('email');
    deleteParagraphData('show-email-paragraph');
    
});

document.getElementById('btn-delet-message').addEventListener('click', function(){
    deletFromLocalStorage('message');
    deleteParagraphData('show-message-paragraph');
});

document.getElementById('btn-reset').addEventListener('click', function(){
    window.localStorage.clear();

    deleteParagraphData('show-name-paragraph')
    deleteParagraphData('show-email-paragraph');
    deleteParagraphData('show-message-paragraph');
});