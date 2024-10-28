const likeButtonElement = document.querySelector('#like-button');

const handleLike = () => {
    console.log('You clicked me!');
}

likeButtonElement.addEventListener('click', ()=> {
    console.log('You clicked me!');
})


const commentButtonElement = document.querySelector('#comment-button');
const commentListElement = document.querySelector('ul');
const inputElement = document.querySelector('input')

commentButtonElement.addEventListener('click', ()=> {
    if(inputElement.value != "" ) {
    const commentElement = document.createElement('li');
    commentElement.textContent = inputElement.value
    commentListElement.appendChild(commentElement);
    inputElement.value = "";
}   

})

