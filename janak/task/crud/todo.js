
document.getElementById('btn').addEventListener('click', addText);
document.getElementById('selectAllCheckbox').addEventListener('click', toggleSelectAll);
document.getElementById('deleteAllBtn').addEventListener('click', deleteAll);

function addText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() !== "") {
        const textContainer = document.getElementById('textContainer');
        const newDiv = document.createElement('div');
        newDiv.classList.add('div2');

        newDiv.innerHTML = `
    <input type="checkbox">
        <textarea disabled>${inputText}</textarea>
        <button onclick="editText(this)">Edit</button>
        <button onclick="deleteText(this)">Delete</button>
    `;

        textContainer.appendChild(newDiv);
        document.getElementById('inputText').value = "";
    }
}

function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('#textContainer .div2 input[type="checkbox"]');
    const selectAll = document.getElementById('selectAllCheckbox').checked;
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAll;
    }
}

function deleteAll() {
    const checkboxes = document.querySelectorAll('#textContainer .div2 input[type="checkbox"]');
    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            checkboxes[i].parentElement.remove();
        }
    }
}

function editText(button) {
    const textarea = button.previousElementSibling;
    textarea.disabled = !textarea.disabled;F
}

function deleteText(button) {
    button.parentElement.remove();
}

