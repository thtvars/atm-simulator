/**document.querySelector('h3');
console.log(document.querySelector('h3'));
console.log(document.querySelector('.h3-danger'));
console.log(document.querySelector('#parrafo'));
console.log(document.getElementById('parrafo'));

console.log(document.querySelectorAll('.h3-danger'));
console.log(document.querySelectorAll('h3'));

const paragraph = document.querySelector('#parrafo');
paragraph.textContent = 'Text from js';
paragraph.innerHTML = '<b>Text with inner HTML</b>'; //innerHTML allows you to modify text while using labels 
paragraph.classList.add('h3-danger', 'my-2')
*/

const list = document.getElementById('list');
//console.log(list);

//Creating elements
//const li = document.createElement('li');
//li.textContent = 'first element';
//appending child element to node
//list.appendChild(li);

const arrayElement = ['*first element*', '*second element*', '*third element*'];

/**
 * arrayElement.forEach(item => {
    
    //console.log(item)
    const li = document.createElement('li'); //type
    li.textContent = item; //text content
    list.appendChild(li); //appending
})
 */

 /**
  *for(let i = 0; i < arrayElement.length; i++){
    const li = document.createElement('li');
     .textContent = arrayElement[i];
    list.appendChild(li);
} 
  */

//This method cause Reflow, it could solvent with Fragment
arrayElement.forEach(item => {
    list.innerHTML += `<li>${item}</li>`
})