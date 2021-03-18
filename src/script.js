var listaImagini = ['https://savoriurbane.com/wp-content/uploads/2019/12/Cozonac-pufos-cu-sm%C3%A2nt%C3%A2n%C4%83-%C8%99i-mult%C4%83-umplutur%C4%83-de-nuc%C4%83-stafide-cacao-reteta-savori-urbane.jpg', 'https://retete-culinare-cu-dana-valery.ro/cdn/recipes/DSC01410.JPG', 'https://img-global.cpcdn.com/recipes/60917c393d8186a4/751x532cq70/prajitura-rapida-fotografie-re%C8%9Beta.jpg', 'http://www.retete-mancare.com/wp-content/uploads/2011/11/chec-pufos.jpg'];
var listaIndex = 0;

document.addEventListener("DOMContentLoaded", letsDoDis);

function letsDoDis() {
    //alert("am incarcat prastia asta, acum merg comezile");
    
    var imagineCuMancare = document.getElementById("imagineChec");
    imagineCuMancare.addEventListener("click", schimbaPozaCuHaleala);
    var zonaDePoze = document.querySelector("#ingrediente>h3")
    zonaDePoze.addEventListener("click", adaugaPoze)
    
    adaugaLiniiTabel();

    var navigation = document.getElementById("meniuNavigare");
    var options = navigation.getElementsByClassName("btn");

    for(var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", activateNavBtn);
    }

}

function activateNavBtn() {
    var current = document.getElementsByClassName("active");
    for(var i = 0; i < current.length; i++)
        current[i].className = current[i].className.replace(" active", "");
    var mainButton = event.target;
    mainButton.className += " active";

}

function schimbaPozaCuHaleala() {
    var pozaDeLaEvent = event.target;
    pozaDeLaEvent.src = listaImagini[listaIndex % listaImagini.length]
    listaIndex++;
}

var listaPozeIngrediente = ["https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg", 
                            "https://s13emagst.akamaized.net/products/695/694118/images/res_8759ea31f91e253b635df8c4bdb001d2.jpg", 
                            "https://www.oetker.ro/Products/oetker.ro/image-thumb__54699__ImageSize/Praf%20de%20copt-0A.png",
                            "https://www.apabrasov.ro/wp-content/uploads/2020/05/pahar-cu-apa-de-la-robinet-s-.jpg",
                            "https://blog.liebherr.com/electrocasnice/ro/wp-content/uploads/sites/7/2017/10/panthermedia_B8758331_4288x2848.jpg",
                            "https://www.paradisulverde.com/blog/wp-content/uploads/2017/03/Scortisoara-min.jpg",
                            "https://www.sanovita.ro/892/faina-integrala-de-grau-1-kg.jpg"
                            ];

function adaugaPoze() {
    var pozaNoua = document.createElement("img");
    listaIndex++;

    pozaNoua.src = listaPozeIngrediente[listaIndex % listaPozeIngrediente.length];
    pozaNoua.style.width='240px';
    pozaNoua.style.height='144px';
    pozaNoua.style.boxShadow='0 6px 6px 0 rgba(0, 0, 0, 0.5)';
    pozaNoua.style.margin='0.5em';
    

    var zona = document.getElementById("bandaPoze");
    zona.appendChild(pozaNoua);

    pozaNoua.addEventListener("click", adioPoza);
}

function adioPoza() {
    var pozaDeSters = event.target;
    pozaDeSters.remove();
}

var listaIngrediente = ["apa", "scortisoara", "praf de copt", "esenta de vanilie"];
var listaCantitati = ["100ml", "50g", "un plic", "un tub"];

function adaugaLiniiTabel() {

    var myTable= document.getElementById("myTable");
    for(i = 0; i < listaIngrediente.length; i++) {
        var myRow = myTable.insertRow(1);
        var myIngredienstCell = myRow.insertCell(0);
        var MyQantityCell = myRow.insertCell(1);

        myIngredienstCell.innerHTML = listaIngrediente[i];
        MyQantityCell.innerHTML = listaCantitati[i];
    }

}