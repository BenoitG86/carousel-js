console.log('Hello world ma gueule');

function next() {
      const widthCarousel = document.querySelector('.image').offsetWidth;
      document.querySelector('.carouselContainer').scrollLeft += widthCarousel;
}
function prev() {
      const widthCarousel = document.querySelector('.image').offsetWidth;
      document.querySelector('.carouselContainer').scrollLeft -= widthCarousel;
}