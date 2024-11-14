// FAQ toggle functionality
const faqQuestions = document.querySelectorAll(".faq-item button");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling; // Get the answer block (next sibling)

    // Check if the answer is currently hidden or not
    if (answer.style.display === "block") {
      answer.style.display = "none"; // Hide the answer if it is currently displayed
    } else {
      answer.style.display = "block"; // Show the answer if it is currently hidden
    }
  });
});
