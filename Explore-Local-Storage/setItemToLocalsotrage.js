let theCount = 0;
document.getElementById('btn-increase').addEventListener('click', function(){
    let increaser = theCount++;
    const addPara = document.getElementById('increase-paragraph');
    const li = document.createElement('li');
    li.innerText = increaser;
    
    addPara.appendChild(li);
    
    localStorage.setItem('the count', increaser);
});




function valueFromInputField(id){
    const textFieldStr = document.getElementById(id);
    const textFieldValue = textFieldStr.value;
    textFieldStr.value = '';
    return textFieldValue;
}

function showData(id, fieldValue){
    const addPara = document.getElementById(id);
    let paragraph = document.createElement('p')
    paragraph.innerText = fieldValue;
    addPara.appendChild(paragraph);
}

function setToLocalStorage(key, value){
    window.localStorage.setItem(key, value);
}

document.getElementById('btn-add-name').addEventListener('click', function(){
    const fieldValue = valueFromInputField('name-field');
    showData('show-name-paragraph', fieldValue);
    setToLocalStorage('name', fieldValue);
});

document.getElementById('btn-add-email').addEventListener('click', function(){
    const fieldValue = valueFromInputField('email-field');
    showData('show-email-paragraph', fieldValue);
    setToLocalStorage('email', fieldValue);
});

document.getElementById('btn-add-message').addEventListener('click', function(){
    const fieldValue = valueFromInputField('message-field');
    showData('show-message-paragraph', fieldValue);
    setToLocalStorage('message', fieldValue);
});





function deleteParagraphData(id){
    const addPara = document.getElementById(id);
    addPara.innerHTML = '';
}

function deletFromLocalStorage(key){
    window.localStorage.removeItem(key);
}

document.getElementById('btn-delet-name').addEventListener('click', function(){
    deleteParagraphData('show-name-paragraph');
    deletFromLocalStorage('name');
});

document.getElementById('btn-delet-email').addEventListener('click', function(){
    deleteParagraphData('show-email-paragraph');
    deletFromLocalStorage('email');
    
});

document.getElementById('btn-delet-message').addEventListener('click', function(){
    deleteParagraphData('show-message-paragraph');
    deletFromLocalStorage('message');
});




document.getElementById('btn-send').addEventListener('click', function(){
    const nameFieldValue = valueFromInputField('name-field');
    showData('show-name-paragraph', nameFieldValue);
    setToLocalStorage('name', nameFieldValue);

    const emailFieldValue = valueFromInputField('email-field');
    showData('show-email-paragraph', emailFieldValue);
    setToLocalStorage('email', emailFieldValue);

    const messageFieldValue = valueFromInputField('message-field');
    showData('show-message-paragraph', messageFieldValue);
    setToLocalStorage('message', messageFieldValue);
    
});





document.getElementById('btn-reset').addEventListener('click', function(){
    window.localStorage.clear();
    const addPara = document.getElementById('increase-paragraph');
    addPara.innerHTML = '';
    deleteParagraphData('show-name-paragraph')
    deleteParagraphData('show-email-paragraph');
    deleteParagraphData('show-message-paragraph');
});