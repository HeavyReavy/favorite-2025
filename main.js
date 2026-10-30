console.log("Hello world!"); 
let addButton = document.getElementById("add");
// let movieCreateDialog = document.getElementById("movie-record-create-dialog");
let closeButton = document.getElementById("cancel-bookmark");

// addButton.addEventListener( "click", () => {movieCreateDialog.classList.add("show-bookmark")} );
// closeButton.addEventListener( "click", () => {movieCreateDialog.classList.remove("show-bookmark")} );


function Dialog(element, className) {
    this.element = document.getElementById(element);
    this.className = className;
}

Dialog.prototype.open = function () {
    this.element.classList.add(this.className);
};

Dialog.prototype.close = function () {
    this.element.classList.remove(this.className);
};

let dialog = new Dialog("movie-record-create-dialog", "show-bookmark");

addButton.addEventListener("click", () => {
  dialog.open();
});

closeButton.addEventListener("click", () => {
    dialog.close();
  });