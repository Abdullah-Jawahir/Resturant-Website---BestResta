const setVideoUrl = (theUrl) => {

    const video = document.querySelector("#video-carousel video");
    video.src = theUrl;
}


setInterval(() => {
    const slider = document.querySelector('.food-categories-slider');
    const firstCard = slider.querySelector('.food-category-card:first-child');
    slider.appendChild(firstCard);
}, 4000);
