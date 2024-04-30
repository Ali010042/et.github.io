document.addEventListener('DOMContentLoaded', function() {
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');

    let sliderList = document.querySelector('.slider .list');
    let thumbnailList = document.querySelector('.slider .thumbnail');
   

    // Function for next button 
    nextBtn.onclick = function() {
        moveSlider('next');
    };

    // Function for prev button 
    prevBtn.onclick = function() {
        moveSlider('prev');
    };

    function moveSlider(direction) {
        let firstItem = sliderList.firstElementChild;
        let lastItem = sliderList.lastElementChild;

        if (direction === 'next') {
            // Clone the first item and its thumbnail
            let clonedFirstItem = firstItem.cloneNode(true);
            let clonedFirstThumbnail = thumbnailList.firstElementChild.cloneNode(true);

            // Append the cloned items to the end
            sliderList.appendChild(clonedFirstItem);
            thumbnailList.appendChild(clonedFirstThumbnail);

            // Remove the original first item and its thumbnail
            sliderList.removeChild(firstItem);
            thumbnailList.removeChild(thumbnailList.firstElementChild);
        } else {
            // Clone the last item and its thumbnail
            let clonedLastItem = lastItem.cloneNode(true);
            let clonedLastThumbnail = thumbnailList.lastElementChild.cloneNode(true);

            // Prepend the cloned items to the beginning
            sliderList.prepend(clonedLastItem);
            thumbnailList.prepend(clonedLastThumbnail);

            // Remove the original last item and its thumbnail
            sliderList.removeChild(lastItem);
            thumbnailList.removeChild(thumbnailList.lastElementChild);
        }
    }
});




