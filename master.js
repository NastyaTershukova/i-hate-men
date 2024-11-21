let images = document.querySelectorAll('.main-images img');
let currentImage = 0;
let interval, quoteInterval;

function initializeProgressBar() {
    document.querySelector('.progress_bar.main').innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        let pill = document.createElement('button');
        pill.innerHTML = `<div><span></span></div>`;
        pill.className = 'item';
        pill.onclick = function() {
            currentImage = i;
            showImage(i);
            startSpinningImages();
        };
        document.querySelector('.progress_bar.main').appendChild(pill);
    }
}
initializeProgressBar();

function showImage(number) {
    if (document.querySelector('.main_img.active')) {
    document.querySelector('.main_img.active').classList.remove('active');
    }
    images[number].classList.add('active');
    if (document.querySelector('.item.selected')) {
        document.querySelector('.item.selected').classList.remove('selected');
    }
    document.querySelectorAll('.item')[number].classList.add('selected');
}
showImage(0);

function startSpinningImages () {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        currentImage = currentImage + 1; //currentImage++, currentImage += 1
        if (currentImage >= images.length) {
            currentImage = 0;
        }
        showImage(currentImage); 
    }, 5000);
}
startSpinningImages();

//quotes

let quotes = document.querySelectorAll('.reviews-quote');
let currentQuote = 0;

function initializeProgressBarQuotes() {
    document.querySelector('.progress_bar.quote').innerHTML = '';
    for (let i = 0; i < quotes.length; i++) {
        let pill = document.createElement('button');
        pill.innerHTML = `<div><span></span></div>`;
        pill.className = 'pill';
        pill.onclick = function() {
            currentQuote = i;
            showQuote(i);
            startSpinningQuotes();
        };
        document.querySelector('.progress_bar.quote').appendChild(pill);
    }
}
initializeProgressBarQuotes();

function showQuote(number) {
    if (document.querySelector('.reviews-quote.active')) {
        document.querySelector('.reviews-quote.active').classList.remove('active');
    }
    quotes[number].classList.add('active');
    if (document.querySelector('.pill.selected')) {
        document.querySelector('.pill.selected').classList.remove('selected');
    }
    document.querySelectorAll('.pill')[number].classList.add('selected');
}
showQuote(0);

document.querySelector('.quote-next').addEventListener('click', function() {
    currentQuote = currentQuote + 1;
    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }
    showQuote(currentQuote);
    startSpinningQuotes();
});

document.querySelector('.quote-back').addEventListener('click', function() {
    currentQuote = currentQuote - 1;
    if (currentQuote < 0) {
        currentQuote = quotes.length - 1;
    }
    showQuote(currentQuote);
    startSpinningQuotes();
});

function startSpinningQuotes () {
    if (quoteInterval) {
        clearInterval(quoteInterval)
    }
    quoteInterval = setInterval(() => {
        currentQuote = currentQuote + 1;
        if (currentQuote >= quotes.length) {
            currentQuote = 0;
        }
        showQuote(currentQuote); 
    }, 5000);
}
startSpinningQuotes();