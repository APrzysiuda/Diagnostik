function Bidule() {
    rap(this);
    return false;
};

function rap(link) {
    rapport = document.getElementById('rapport');
    rapport.innerHTML = '<iframe src="rapport.pdf" class ="box_shadow_without_radius" width="80%" height=800  align="middle" frameborder="0" allowfullscreen="True" style="border:0;"></iframe>';
}
document.getElementById('rapport').onclick = function() {
    this.style.display = 'none';
};
