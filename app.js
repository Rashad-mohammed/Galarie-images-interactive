$(document).ready(function(){
    $('.thumb a').mouseenter(function(e){ // Lorsque la souris entre dans une miniature
        e.preventDefault(); // Empêche le comportement par défaut du lien
        $('.imgBox img').attr("src", $(this).attr("href")); // Charge l'image principale avec le lien de la miniature
    })
})