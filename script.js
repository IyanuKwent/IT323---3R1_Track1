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
