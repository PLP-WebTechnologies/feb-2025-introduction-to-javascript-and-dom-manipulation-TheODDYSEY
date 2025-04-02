// Change text content dynamically
function changeText() {
    const heading = document.getElementById('dynamic-heading');
    heading.textContent = 'Text has been changed dynamically!';
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const paragraph = document.getElementById('styled-paragraph');
    paragraph.style.color = 'blue';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontWeight = 'bold';
}

// Add or remove an element when a button is clicked
function addElement() {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added paragraph.';
    container.appendChild(newElement);
}

function removeElement() {
    const container = document.getElementById('element-container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

// Attach event listeners to buttons
document.getElementById('change-text-btn').addEventListener('click', changeText);
document.getElementById('change-style-btn').addEventListener('click', changeStyle);
document.getElementById('add-element-btn').addEventListener('click', addElement);
document.getElementById('remove-element-btn').addEventListener('click', removeElement);// This file is intentionally left blank.