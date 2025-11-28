const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg'
    
];

let currentIndex = 0;
    const galleryImage = document.getElementById('galleryImage');
    const nextBtn = document.getElementById('next');


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});



