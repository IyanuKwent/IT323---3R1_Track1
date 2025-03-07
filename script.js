document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");
    const searchBar = document.getElementById("search-bar");

    if (!courseList) {
        console.error("Error: Course list not found.");
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
                courseList.innerHTML = "";

                let foundCourses = false;

                allCourses.forEach(course => {
                    let matchingSubjects = course.subjects.filter(subject =>
                        subject.toLowerCase().includes(filter.toLowerCase())
                    );

                    if ((document.location.pathname.includes("PIT1.html") && matchingSubjects.length > 0) || 
                        document.location.pathname.includes("act3.html") || filter === "") {
                        
                        foundCourses = true;

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


            if (document.location.pathname.includes("PIT1.html") && searchBar) {
                searchBar.addEventListener("input", function () {
                    displayCourses(this.value.trim());
                });
            } else {
                displayCourses();
            }
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
            courseList.innerHTML = "<p style='color:white;'>Failed to load courses.</p>";
        });


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
