document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON file");
            }
            return response.json();
        })
        .then(data => {
            displayCourses(data.courses);
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            document.getElementById("courses").innerHTML = "<p>Failed to load courses.</p>";
        });
});

function displayCourses(courses) {
    const coursesContainer = document.getElementById("courses");
    coursesContainer.innerHTML = "<h2>My Finished Courses</h2>";

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        courseDiv.innerHTML = `
            <h3>${course.year} - ${course.semester}</h3>
            <ul>
                ${course.subjects.map(subject => `<li>${subject}</li>`).join("")}
            </ul>
        `;

        coursesContainer.appendChild(courseDiv);
    });
}




document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");

    document.getElementById("about").addEventListener("mouseover", function () {
        profilePic.src = "images/pfp.png"; // Change this to your About Me image
    });

    document.getElementById("education").addEventListener("mouseover", function () {
        profilePic.src = "images/pfp2.png"; // Change this to your Education image
    });

    document.getElementById("skills").addEventListener("mouseover", function () {
        profilePic.src = "images/pfp3.png"; // Change this to your Skills image
    });

    // Optional: Reset the image when not hovering
    document.querySelector(".right").addEventListener("mouseleave", function () {
        profilePic.src = "images/pfp.png"; // Default image
    });
});
