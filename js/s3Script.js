function Bidule() {
    displayImg(this);
    return false;
};

function displayImg(link) {
    overlay = document.getElementById('overlay');
    overlay.innerHTML = '<iframe src="rapport.pdf" class ="box_shadow_without_radius" width="80%" height=800  align="middle" frameborder="0" allowfullscreen="True" style="border:0;"></iframe>';
    overlay.style.display = 'block';
}
document.getElementById('overlay').onclick = function() {
    this.style.display = 'none';
};

