//Task 1:
/*setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। */
console.log('first');
console.log('second');
setTimeout(() => {
    console.log('third');
}, 3500);
console.log('fourth');
console.log('fifth');

console.log('');
console.log('');



//Task 2:
/* prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও */
//this code will run in the brower only
const inputNumStr = prompt("Enter a number");
const inputNumValue = JSON.parse(inputNumStr);
const result = inputNumValue + 200;
alert(result);

console.log('');
console.log(''); 




//Task 3:
/* ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও  */
//this code will run in the brower only
const confirmation = confirm("Do you anna see the loaction of your website?"); 
if(confirmation){
    console.log(location.href);
  } 
  else{
    console.log('Permisiion Declined');
  }

console.log('');
console.log('');


//Task 4
//Clear the localstorage of any website
localStorage.clear()

//Task 5:
//Set a localstorage item. key:name, value:khan
localStorage.setItem('name', 'khan')

//Task 6:
//Set a localstorage item. key:age, value:10
localStorage.setItem('age', 10)

//Task 7:
//Get the items you have set
localStorage.getItem('name');
localStorage.getItem('age'); 

//Task 8:
//Remove the local storage key 'name' & key 'age'
localStorage.removeItem('name')
localStorage.removeItem('age') 

//Task 9:
//Set object as loacal storage item. The object is {firstName: 'Abraham', lastName: 'Linkon'}

const setobj = {firstName: 'Abraham', lastName: 'Linkon'}
localStorage.setItem('setobj', JSON.stringify(setobj)); 