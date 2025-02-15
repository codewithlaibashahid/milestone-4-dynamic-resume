// Grabbing form and display elements
var resumeForm = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// Event listener for form submission
resumeForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    // Collecting form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        degree: document.getElementById('degree').value,
        institution: document.getElementById('institution').value,
        gradYear: parseInt(document.getElementById('gradYear').value, 10),
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value,
    };
    // Generate and display the resume
    generateResume(formData);
});
// Function to generate the resume and insert it into the editable div
function generateResume(data) {
    resumeDisplay.innerHTML = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(data.name, "</p>\n    <p><strong>Email:</strong> ").concat(data.email, "</p>\n    <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n    \n    <h3>Education</h3>\n    <p><strong>Degree:</strong> ").concat(data.degree, "</p>\n    <p><strong>Institution:</strong> ").concat(data.institution, "</p>\n    <p><strong>Graduation Year:</strong> ").concat(data.gradYear, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(data.experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(data.skills, "</p>\n  ");
    // Make the generated resume content editable
    resumeDisplay.contentEditable = 'true';
}
