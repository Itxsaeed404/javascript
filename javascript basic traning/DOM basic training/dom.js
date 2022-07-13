// // //******************* Window Object and DOM **********************

// // ***************** single element

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// // *****************  Multiple element

// //Node list
// console.log(document.querySelectorAll('.item'));

// // HTML collection
// console.log(document.getElementsByClassName('item'))


// // ***************** Make Loop

// const items = document.querySelectorAll('.item');

// items.forEach((item) =>console.log(item));


// // ***************** add or Remove things

// const ul = document.querySelector('.items')


// Remove all items
// ul.remove(); 

// Remove last or first Element/Items
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();

// add element
// ul.firstElementChild.textContent = 'I am New';

// add , remove or do other stuff with other than first and last items(you can make changes in first and last also) 

// Remove Element
// ul.children[1].remove();

// add Element
// ul.children[3].textContent = 'now I am new in forth row';

// add or change with HTML code

// ul.children[0].innerHTML = '<h1>HTML</h1>';



// // ***************** playing With button

// // select button
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     console.log('click');
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.className);
//     // change the color on Click
//     document.querySelector('#my-form').style.background = '#ccc';

//     document.querySelector('body').classList.add('bg-dark');

//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>changed After click</h1>';


// });
