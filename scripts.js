document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    learnMoreBtn.addEventListener('click', function() {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            learnMoreBtn.textContent = 'Show Less';
        } else {
            moreInfo.style.display = 'none';
            learnMoreBtn.textContent = 'Learn More';
        }
    });
});
