document.addEventListener('DOMContentLoaded', function() {
    const jobTypeSection = document.getElementById('job-type-section');
    const resumeHelpSection = document.getElementById('resume-help-section');

    // Function to display job type selection section
    function showJobTypeSection() {
        jobTypeSection.style.display = 'block';
        resumeHelpSection.style.display = 'none';
    }

    // Function to display resume help section with specific job type
    function showResumeHelp(jobType) {
        jobTypeSection.style.display = 'none';
        resumeHelpSection.style.display = 'block';

        const resumeHelpContent = document.getElementById('resume-help-content');
        resumeHelpContent.innerHTML = `
            <h3>Resume Help for ${jobType}</h3>
            <p>Get assistance for ${jobType} job applications.</p>
        `;
    }

    // Event listener for job type selection form submission
    const jobSearchForm = document.getElementById('job-search-form');
    if (jobSearchForm) {
        jobSearchForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form submission

            const selectedJobType = document.getElementById('job-type').value;
            showResumeHelp(selectedJobType);
        });
    }

    // Show job type selection section by default
    showJobTypeSection();
});