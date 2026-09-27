const courses = [
  { title: "Introduction to Web Development", lessons: 12 },
  { title: "Data Structures & Algorithms", lessons: 20 },
  { title: "Project Management Basics", lessons: 8 },
];

const list = document.getElementById("course-list");

courses.forEach((course) => {
  const li = document.createElement("li");
  li.textContent = `${course.title} — ${course.lessons} lessons`;
  list.appendChild(li);
});
