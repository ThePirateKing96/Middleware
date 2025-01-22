document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("h1"); // בוחר את כל הכותרות מסוג H1
  titles.forEach((title) => {
    title.style.color = "red"; // משנה את הצבע של כל כותרת
  });
});
