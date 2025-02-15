// Grabbing form and display elements
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Interface for form data structure
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  degree: string;
  institution: string;
  gradYear: number;
  experience: string;
  skills: string;
}

// Event listener for form submission
resumeForm.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // Prevent page reload
  
  // Collecting form data
  const formData: ResumeData = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value,
    degree: (document.getElementById('degree') as HTMLInputElement).value,
    institution: (document.getElementById('institution') as HTMLInputElement).value,
    gradYear: parseInt((document.getElementById('gradYear') as HTMLInputElement).value, 10),
    experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
    skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
  };

  // Generate and display the resume
  generateResume(formData);
});

// Function to generate the resume and insert it into the editable div
function generateResume(data: ResumeData) {
  resumeDisplay.innerHTML = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    
    <h3>Education</h3>
    <p><strong>Degree:</strong> ${data.degree}</p>
    <p><strong>Institution:</strong> ${data.institution}</p>
    <p><strong>Graduation Year:</strong> ${data.gradYear}</p>
    
    <h3>Experience</h3>
    <p>${data.experience}</p>
    
    <h3>Skills</h3>
    <p>${data.skills}</p>
  `;
  
  // Make the generated resume content editable
  resumeDisplay.contentEditable = 'true';
}
