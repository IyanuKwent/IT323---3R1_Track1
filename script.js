document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");

    fetch("course.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            courseList.innerHTML = ""; // Clear "Loading courses..." text

            if (!data.courses || data.courses.length === 0) {
                courseList.innerHTML = "<p>No courses found.</p>";
                return;
            }

            data.courses.forEach(course => {
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






document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");

    document.getElementById("about").addEventListener("mouseover", function () {
        profilePic.src = "images/pfp.png";
    });

    document.getElementById("education").addEventListener("mouseover", function () {
        profilePic.src = "images/pfp2.png";
    });

    document.getElementById("skills").addEventListener("mouseover", function () {
        profilePic.src = "images/pfp3.png";
    });


    document.querySelector(".right").addEventListener("mouseleave", function () {
        profilePic.src = "images/pfp.png";
    });
});
