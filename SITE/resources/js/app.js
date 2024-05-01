// Create variable for container
const containerEl = document.querySelector(".container");
// Create array of careers
const careers = ["Husband", "Father", "Web Developer", "Software Developer"];

// set variable for index of careers
let careerIndex = 0;
// set variable for index of characters
let characterIndex = 0;
// Call function to update text
updateText();

/**
 * Function to update the text on the page
 * @param {null}
 * @return {null}
 */
function updateText() {
  // Increment characterIndex to get the next character in the career
  characterIndex++;
  // Set the innerHTML of the container element to the current career
  // with the first characterIndex characters of the current career
  containerEl.innerHTML = `
<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  // If the characterIndex is equal to the length of the current career
  if (characterIndex === careers[careerIndex].length) {
    // Increment the careerIndex and reset characterIndex to 0
    careerIndex++;
    characterIndex = 0;
  }
  // If the careerIndex is equal to the length of the careers array
  if (careerIndex === careers.length) {
    // Reset the careerIndex to 0
    careerIndex = 0;
  }
  // Call the updateText function again with a 300ms delay
  setTimeout(updateText, 220);
}
