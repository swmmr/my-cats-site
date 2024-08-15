const tabItems = document.querySelectorAll(".tab-items");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const pictureButtonMoo = document.querySelector(".switch-moo");
const pictureButtonNim = document.querySelector(".switch-nim");
let currTab;


// Select tab content item
function selectItem() {
    removeBorder();
    hideContent();

    // add border and show content for current tab
    this.classList.add("tab-border");
    const tabContent = document.querySelector(`#${this.id}-content`);
    currTab = tabContent;
    tabContent.classList.add("show");
}

// Function to remove border from all tabs
function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

// Fucntion to hide all content
function hideContent() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

// Listen for button click

let mooNum = 1;
pictureButtonMoo.addEventListener("click", () => {
    var imageMoo = document.querySelector(".moo");
    mooNum++;
    if (mooNum > 7) {
        mooNum = 1;
    }
    imageMoo.src = `img/moo_${mooNum}.JPG`;
});

let nimNum = 1;
pictureButtonNim.addEventListener("click", () => {
    var imageNim = document.querySelector(".nim");
    nimNum++;
    if (nimNum > 10) {
        nimNum = 1;
    }
    imageNim.src = `img/nimbus_${nimNum}.JPG`;
});
// Switching MooMoo Pic
// function switchMoo() {

// }


