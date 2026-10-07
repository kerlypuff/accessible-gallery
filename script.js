function upDate(previewPic) {
    console.log("Mouse event triggered!");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    var imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse left — resetting preview");
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over or tab to an image below to display here.";
}

function upDateFocus(previewPic) {
    console.log("Keyboard focus event triggered!");
    console.log("Focused alt: " + previewPic.alt);
    console.log("Focused source: " + previewPic.src);

    var imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undoFocus() {
    console.log("Focus left — resetting preview");
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over or tab to an image below to display here.";
}

function addTabindex() {
    console.log("Page loaded — adding tabindex to figures");

    // Grab every figure in the gallery
    var figures = document.querySelectorAll('figure');

    // For loop to loop through each figure
    for (var i = 0; i < figures.length; i++) {
        figures[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to figure " + (i + 1));
    }
}

window.addEventListener('load', addTabindex);

// --- Mouse events on images ---
var previews = document.querySelectorAll('.preview');
previews.forEach(function(preview) {
    preview.addEventListener('mouseover', function() {
        upDate(preview);
    });
    preview.addEventListener('mouseleave', undo);
});

// --- Keyboard events on figures ---
var figures = document.querySelectorAll('figure');
figures.forEach(function(fig) {
    fig.addEventListener('focus', function() {
        var img = fig.querySelector('img');
        upDateFocus(img);
    });
    fig.addEventListener('blur', undoFocus);
});