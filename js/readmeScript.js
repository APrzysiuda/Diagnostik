function Truc() {
    displayImg(this);
    return false;
};

function displayImg(link) {
    overlay = document.getElementById('rapport');
    overlay.innerHTML = '<iframe class="iframe-doc" src="../doc.pdf"></iframe>';
    overlay.style.display = 'block';
}
document.getElementById('rapport').onclick = function() {
    this.style.display = 'none';
};
