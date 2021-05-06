function Bidule() {
    rap(this);
    return false;
};


function rap(link) {
    load = document.getElementById('fileUpload');
    if (load.value.split('.').pop() == 'edf'){
        if (confirm("The analysis should take less than 5 minutes ! Press 'Ok' to start the analysis or 'Cancel' to cancel it !")) {
            setTimeout(function(){
                rapport = document.getElementById('rapport');
                rapport.innerHTML = '<iframe src="rapport.pdf" class ="box_shadow_without_radius" width="80%" height=800  align="middle" frameborder="0" allowfullscreen="True" style="border:0;"></iframe>'
            }, 5000);
        }
        document.getElementById("demo").innerHTML = txt;

    }
    else {
        alert('You have to enter an edf file !')
    }

}
document.getElementById('rapport').onclick = function() {
    this.style.display = 'none';
};


function miseEnAttente()
{
    //Traitement
     //On attend 5 secondes avant d'exécuter la fonction
}
function fonctionAExecuter()
{
    //Le code écrit dans cette fonction ne sera exécuté qu'au bout de 5 secondes
}
