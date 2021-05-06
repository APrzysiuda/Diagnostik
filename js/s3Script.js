function Bidule() {
    rap(this);
    return false;
};

function rap(link) {
    load = document.getElementById('fileUpload');
    if (load.value.split('.').pop() == 'edf'){
        rapport = document.getElementById('rapport');
        rapport.innerHTML = '<iframe src="rapport.pdf" class ="box_shadow_without_radius" width="80%" height=800  align="middle" frameborder="0" allowfullscreen="True" style="border:0;"></iframe>';
    }
    else {
        alert('You have to enter an edf file !')
    }

}
document.getElementById('rapport').onclick = function() {
    this.style.display = 'none';
};

