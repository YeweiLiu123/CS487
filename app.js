document.addEventListener('DOMContentLoaded', function() {
    const mainScreen = document.getElementById('main-screen');
    const learningSection = document.getElementById('learning-section');
    const jobSearchSection = document.getElementById('job-search-section');

    function showLearning() {
        mainScreen.style.display = 'none';
        learningSection.style.display = 'block';
        jobSearchSection.style.display = 'none';
    }

    function showJobSearch() {
        mainScreen.style.display = 'none';
        learningSection.style.display = 'none';
        jobSearchSection.style.display = 'block';
    }
});