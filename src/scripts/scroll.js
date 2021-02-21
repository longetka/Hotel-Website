const scrollBtn = document.querySelector('#scroll-btn');

scrollBtn.addEventListener('click', scrollDown);

function scrollDown() {
    return window.scrollTo({ top: 1081, behavior: 'smooth' });    
}