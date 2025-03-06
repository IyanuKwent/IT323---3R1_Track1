document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");

    fetch("course.json") // Load JSON File
        .then(response => response.json())
        .then(data => {
            courseList.innerHTML = ""; // Clear Loading Text

            data.courses.forEach(course => {
                // Create Course Ice Cube
                const courseDiv = document.createElement("div");
                courseDiv.classList.add("course");

                courseDiv.innerHTML = `
                    <h3>${course.year}</h3>
                    <h4>${course.semester}</h4>
                    <ul>
                        ${course.subjects.map(subject => `<li>${subject}</li>`).join("")}
                    </ul>
                `;

                courseList.appendChild(courseDiv);
            });
        })
        .catch(error => {
            console.error("Error loading courses:", error);
            courseList.innerHTML = "<p>Failed to load courses.</p>";
        });
});


function displayCourses(courses) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear the default "Loading courses..." message

    courses.forEach(course => {
        const courseHeader = document.createElement("h3");
        courseHeader.textContent = `${course.year} - ${course.semester}`;
        courseList.appendChild(courseHeader);

        const subjectList = document.createElement("ul");
        course.subjects.forEach(subject => {
            const subjectItem = document.createElement("li");
            subjectItem.textContent = subject;
            subjectList.appendChild(subjectItem);
        });

        courseList.appendChild(subjectList);
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
