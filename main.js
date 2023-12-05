let html="";
let postsEncontrados=[];
let contador =0;




function buscar(){
    posts.forEach(buscarKeywords);
    //aqui usando el DOM vamos a remplazar lo que existe por lo que contiene postsEncontrados
    //alert(postsEncontrados);
    html="";
    postsEncontrados.forEach(cargarPosts);
    postsEncontrados=[];
    document.getElementById("tarjetas").innerHTML=html;
  }



function cargar(){
  posts.forEach(cargarPosts);
  //cargamos el header en este caso contiene el navbar
  document.getElementById("header").innerHTML=header;
  //Cargamos las tarjetas
  document.getElementById("tarjetas").innerHTML=html;
  //cargamos el footer
  document.getElementById("footer").innerHTML=footer;
}


function buscarKeywords(post){
	//console.log(persona.nombre + " tiene " + persona.edad + " años")
  //alert(post.keywords)
//la palabra buscada sera lo que esta en la caja de texto
let palabraBuscada=document.getElementById("palabrabusqueda").value;
let texto=post.keywords; //la palabra donde se buscara es post.keywords

  if(texto.includes(palabraBuscada)){

    postsEncontrados.push(post)
	//alert("Si esta La palabra ", palabraBuscada);
  }


  }



function cargarPosts(post){
	//console.log(posts.titulo);
	//para cada elemento del array 
	//creaermos un codigo HTML
  let comilla = "'";
  html+=	
'<div class="card" style="width:40%;">'+
  '<img src="./flores/'+post.thumbnail+'.jpg" class="card-img-top" alt="..." >'+
  '<div class="card-body">'+
    '<h5 class="card-title">'+post.titulo+'</h5>'+
    '<p class="card-text">'+post.descripcion+'</p>'+
    '<a  class="btn btn-primary" onclick="showPost('+comilla+post.id+comilla+')">Ver</a>'+
  '</div>'+
'</div>';


}

function showPost(id){

//console.log(posts[id].visualizador.fileName)

cargarMapa(posts[id].visualizador.x, posts[id].visualizador.y, posts[id].visualizador.zoom, posts[id].visualizador.fileName, posts[id].visualizador.campo1, posts[id].visualizador.campo2)

let body=
'<img src="./img/'+posts[id].imagenLienzo+'.jpg" class="img-fluid" alt="Imagen no encontrada">'+
'<div class="container" align="center">'+
'<br>'+
'<br>'+
'<br>'+
'<h1>'+posts[id].titulo+'</h1>'+
'<p>'+posts[id].contenido+'</p>'+
'<br>'+
'<br>'+
'<br>'+
'<h2>Lista de imagenes que componen el mosaico</h2>'+
'</div>';

//usando el DOM vamos a reemplazar lo que actualmente existe por
//el contenido del post


//console.log(body);
document.getElementById("tarjetas").innerHTML=body;


}



/*
if(postsEncontrados.length==0){
  posts.forEach(cargarPosts);
}
*/
  




//console.log(html);
//mandamos como argumento una funcion
//por cada elemento del array mandar llamar la 
//funcion cargarPosts

//con el DOM reemplazamos el elemento html con id "tarjetas" por el codigo que acabamos de crear
// y que esta en la variable HTML






