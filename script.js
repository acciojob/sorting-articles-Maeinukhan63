//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip the articles ("a", "an", "the") from the band names
function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array while ignoring the articles
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Get the unordered list element by its id
const bandList = document.getElementById('band');

// Create list items for each sorted band and append to the list
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
