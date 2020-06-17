// let btns = document.querySelectorAll('#movie-list .delete');

// btns.forEach( btn => {
//     btn.addEventListener('click', (e) => {

//         const li = e.target.parentElement;
//         console.log(li);

//         li.parentNode.removeChild(li);
//     });
// })

// Event Bubbling
// Delete the list item
const list = document.querySelector('#movie-list ul');

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        list.removeChild(li);
    }
});


// Add a new Movie

// console.log(document.forms);
const addMovieForm = document.forms['add-movie'];
// console.log(addMovieForm);

addMovieForm.addEventListener('submit', (e) => {
    // console.log(e.target, 'Submit-Event');
    e.preventDefault();
    // console.log('submit');
    const value = addMovieForm.querySelector("input[type='text']").value;
    console.log(value);

    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    movieName.textContent = value;

    deleteBtn.classList.add('delete');
    movieName.classList.add('name');

    li.appendChild(movieName);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    console.log(li);
})

// Hide List
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e) => {
    console.log(hideBox.checked);
    if(hideBox.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'inline';
    }
    // console.log('Clicked the checkbox');
})
// document.getElementById("wrapper").style.display = "none";


//Search 
// Task - Search the movie from the list provided:
// 1. As the user types, the list should show the matching pattern movies
// 2. If the movie is not the part of our list then we show nothing as long as the search box has values

const searchMovieForm = document.forms['search-movies'];

searchMovieForm.addEventListener('keyup',(e) => {
    let movieList = document.querySelectorAll('#movie-list ul li');
    
    movieList.forEach( movie => {
        if(! movie.querySelector('.name').textContent.toLowerCase().includes(searchMovieForm.querySelector('input').value.toLowerCase())){
            movie.style.display = 'none';
        }else{
            movie.style.display = 'block';
        }
    }

    );
    
})