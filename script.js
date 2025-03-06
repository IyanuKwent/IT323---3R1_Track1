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
            document.getElementById("course-list").innerHTML = "<li>Failed to load courses.</li>";
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
