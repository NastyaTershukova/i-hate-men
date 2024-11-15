let images = document.querySelectorAll('.main-images img');

function initializeProgressBar() {
    document.querySelector('.progress_bar.main').innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        let pill = document.createElement('button');
        pill.innerHTML = `<div><span></span></div>`;
        pill.className = 'item';
        document.querySelector('.progress_bar.main').appendChild(pill);
    }
}
initializeProgressBar();

function showImages(number) {
    if (document.querySelector('.main_img')) {
    document.querySelector('.main_img.active').classList.remove('active');
    }
    images[number].classList.add('active');
}
showImages(0);

function startSpinningImages () {
    let interval = setInterval(() => {
    }, 5000);
}
startSpinningImages();