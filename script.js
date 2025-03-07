document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");
    const searchBar = document.getElementById("search-bar");

    if (!courseList || !searchBar) {
        console.error("Error: Course list or search bar not found.");
        return;
    }

    fetch("courses.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON file");
            }
            return response.json();
        })
        .then(data => {
            let allCourses = data.courses;

            function displayCourses(filter = "") {
                courseList.innerHTML = ""; // Clear previous courses

                let foundCourses = false; // Track if any courses match

                allCourses.forEach(course => {
                    let matchingSubjects = course.subjects.filter(subject =>
                        subject.toLowerCase().includes(filter.toLowerCase())
                    );

                    if (matchingSubjects.length > 0 || filter === "") {
                        foundCourses = true; // At least one course is found

                        const courseDiv = document.createElement("div");
                        courseDiv.classList.add("course");

                        courseDiv.innerHTML = `
                            <h3>${course.year} - ${course.semester}</h3>
                            <ul>
                                ${matchingSubjects.map(subject => `<li>${subject}</li>`).join("")}
                            </ul>
                        `;

                        courseList.appendChild(courseDiv);
                    }
                });

                if (!foundCourses) {
                    courseList.innerHTML = "<p style='color:white;'>No matching courses found.</p>";
                }
            }

            // Display all courses initially
            displayCourses();

            // Ensure search bar triggers display update
            searchBar.addEventListener("input", function () {
                displayCourses(this.value.trim());
            });
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            courseList.innerHTML = "<p style='color:white;'>Failed to load courses.</p>";
        });

    // Profile Picture Hover Effect
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
