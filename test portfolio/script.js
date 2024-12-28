// Smooth scrolling for anchor links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Typing Effect
const typingText = document.getElementById('change'); // This is where the text will be typed out
const words = ['Web Developer', 'Software Developer', 'Script Writer','Accountant']; // List of words to type
let wordIndex = 0;
let charIndex = 0;

// Function to type the words
function type() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][charIndex]; // Add one character at a time
        charIndex++;
        setTimeout(type, 100); // Repeat every 100ms
    } else {
        setTimeout(deleteWord, 1000); // Wait for 1 second before deleting the word
    }
}

// Function to delete the typed word
function deleteWord() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1); // Remove one character at a time
        charIndex--;
        setTimeout(deleteWord, 50); // Repeat every 50ms
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word in the array
        setTimeout(type, 500); // Wait for 0.5s before typing the next word
    }
}

// Start typing the first word
type();

// Optional: Add event listeners for the experience and project section
document.getElementById("experience").addEventListener("click", function() {
    window.location.href = "#experience";
});

document.getElementById("SeeProject").addEventListener("click", function() {
    window.location.href = "#project";
});

// You can also add interactive elements like hover effects or more event listeners

// rightArrow to downArrow
let containers = document.querySelectorAll(".experience, .SeeProject");

// Loop through each container and attach event listeners
containers.forEach(container => {
    container.addEventListener("mouseover", () => {
        let arrow = container.querySelector(".rightArrow");
        // Add a smooth transition
        arrow.style.transition = "all 3s ease";
        arrow.classList.remove("fa-right-long");
        arrow.classList.add("fa-down-long");
    });

    container.addEventListener("mouseout", () => {
        let arrow = container.querySelector(".rightArrow");
        // Add a smooth transition
        arrow.style.transition = "all 3s ease";
        arrow.classList.remove("fa-down-long");
        arrow.classList.add("fa-right-long");
    });
});

