
// Generic Modal for Enlarged Images
function openModal(imageSrc, captionText) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const caption = document.getElementById('modal-caption');

  // Set image source and caption text
  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.textContent = captionText;

  // Hide GitHub and Download buttons if opening a general image
  document.getElementById('modal-buttons').style.display = 'none';
}

// Modal for Projects with GitHub and Download Links
function openProjectModal(imageSrc, captionText, githubLink, downloadLink) {
  // Set the image and caption using openModal function
  openModal(imageSrc, captionText);

  // Show buttons specifically for projects
  document.getElementById('modal-buttons').style.display = 'flex';
  document.getElementById('github-link').href = githubLink;
  document.getElementById('download-link').href = downloadLink;
}

// Close Modal
function closeModal() {
  document.getElementById('modal').style.display = "none";
}

// Event listener for the contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields.');
  }
});


// script.js
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000, // Duration of animations in milliseconds
    easing: "ease-in-out", // Easing function for animations
    once: true, // Whether animation should happen only once - while scrolling down
  });
});
