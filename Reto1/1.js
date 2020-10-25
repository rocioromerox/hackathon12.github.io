function action() {
    document.getElementById('dropdownLinks').classList.toggle('show');
    
    
}


window.onclick = function(event) {
    if(!event.target.matches('.dropdown-button')) {
        var desplegables = document.getElementsByClassName('dropdown-content');
        var i;

        for(i=0; i < desplegables.length; i++){
            var abrir = desplegables[i];
            if (abrir.classList.contains('show')){
                abrir.classList.remove('show');
            }
        }
    }
    
}
