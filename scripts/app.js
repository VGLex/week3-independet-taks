let moviePoster = document.querySelector('.movie-poster');
let modal = document.querySelector('#myModal');
let closeBnt = document.querySelector('.closeBnt');
let modalImage = document.querySelector('.movie-poster-card');

moviePoster.addEventListener('click', ()=> {
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closeBnt.addEventListener('click', ()=> {
    modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
})