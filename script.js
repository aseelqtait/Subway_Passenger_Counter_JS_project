// Retrieve the necessary DOM elements
var countElement = document.getElementById('count_el');
var incrementButton = document.getElementById('increment_btn');
var saveButton = document.getElementById('save_btn');
var saveEntriesElement = document.getElementById('save_el');

// Initialize the count and entries array
var count = 0;
var entries = [];

// Function to update the count element
function updateCount() {
    countElement.textContent = count;
}

// Function to update the save entries element
function updateSaveEntries() {
    saveEntriesElement.textContent = 'Previous Entries: ' + entries.join(', ');
}

// Event listener for the increment button
incrementButton.addEventListener('click', function() {
    count++;
    updateCount();
});

// Event listener for the save button
saveButton.addEventListener('click', function() {
    entries.push(count);
    updateSaveEntries();
    count = 0;
    updateCount();
});
