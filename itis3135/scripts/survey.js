document.addEventListener("DOMContentLoaded", function () {
    const introForm = document.getElementById("introForm");
    const coursesContainer = document.getElementById("coursesContainer");
    const addCourseButton = document.getElementById("addCourse");

    // Add an event listener to the "Submit" button
    introForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Perform form validation here (e.g., check if required fields are filled)

        // Gather data from the form
        const formData = {
            name: document.getElementById("name").value,
            mascot : document.getElementById("mascot").value,
            image: document.getElementById("image").value, // You might want to handle file input differently
            imageCaption: document.getElementById("imageCaption").value,
            personalBackground: document.getElementById("personalBackground").value,
            professionalBackground: document.getElementById("professionalBackground").value,
            academicBackground: document.getElementById("academicBackground").value,
            backgroundWebDev: document.getElementById("backgroundWebDev").value,
            primaryPlatform: document.getElementById("primaryPlatform").value,
            courses: Array.from(document.querySelectorAll(".courseInput")).map(input => input.value),
            funnyThing: document.getElementById("funnyThing").value,
            anythingElse: document.getElementById("anythingElse").value,
            agree: document.getElementById("agree").checked
            // Add other form fields here
        };

        // Replace the form with content
        replaceFormWithContent(formData);
    });

    // Add an event listener to the "Reset" button
    introForm.addEventListener("reset", function () {
        // Reset the form
        coursesContainer.innerHTML = ''; // Remove added course text boxes
    });

    // Add an event listener to the "Add Course" button
    addCourseButton.addEventListener("click", function () {
        addCourseInput();
    });

    // Function to add a new course text box
    function addCourseInput() {
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.className = "courseInput";
        courseInput.required = true;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "deleteCourse";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            coursesContainer.removeChild(courseInput);
            coursesContainer.removeChild(deleteButton);
        });

        coursesContainer.appendChild(courseInput);
        coursesContainer.appendChild(deleteButton);
    }

    // Function to replace the form with content
    function replaceFormWithContent(formData) {
        const contentDiv = document.createElement("div");
        contentDiv.innerHTML = `
            <h2>Your Intro Page</h2>
            <p>Name: ${formData.name}</p>
            <!-- Add other form data here -->
        `;
    
        introForm.parentNode.replaceChild(contentDiv, introForm);
    }
    
});


