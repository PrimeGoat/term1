const firstItem = document.querySelector('#item-1');

firstItem.innerText = 'NOT NUMBER ONE';
firstItem.style.color = 'red';
firstItem.style.border = '3px dotted orange';

const newLi = document.createElement('li');
newLi.innerText = 'New Item???'

const list = document.querySelector('ul');
list.appendChild(newLi);