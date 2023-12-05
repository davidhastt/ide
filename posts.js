function cargarMapa(x,y, zoom, fileName, campo1, campo2){
  // Crear el mapa
  var map = L.map('map').setView([y,x], zoom);
  // Añadir una capa de mapa base (por ejemplo, OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  }).addTo(map); 
  // Cargar el archivo GeoJSON
  console.log(fileName);

  fetch('./json/'+fileName+'.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Crear una capa GeoJSON y añadirla al mapa
      //L.geoJSON(data).addTo(map);
  
      L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      layer.on('click', function() {
        // Aquí puedes acceder a los datos del feature y mostrarlos como desees
        //console.log(feature.properties); // Ejemplo: Imprimir las propiedades en la consola
        let valores = Object.values(feature.properties);
        //console.log(valores[0]);
        
        // También puedes mostrar los datos en un cuadro de información emergente (popup)
        layer.bindPopup('<h3>' + valores[campo1]+ '</h3><p>' + valores[campo2] + '</p>').openPopup();
      });
    }
  }).addTo(map);
  
    });




    
  }




const posts=
[
  {
  "id": 0,
  "titulo": "Archivo en formato geoJSON de México",
  "categoria": "JSON",
  "descripcion": "Archivo de la republica mexicana en formato geoJSON",
  "thumbnail": "1",
  "imagenLienzo": "1.1",
  "contenido": '<div id="carouselExample" class="carousel slide">'+
  '<div class="carousel-inner">'+
    '<div class="carousel-item active">'+
      '<img src="..." class="d-block w-100" alt="...">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="..." class="d-block w-100" alt="...">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="..." class="d-block w-100" alt="...">'+
    '</div>'+
  '</div>'+
  '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">'+
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
    '<span class="visually-hidden">Previous</span>'+
  '</button>'+
  '<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">'+
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
    '<span class="visually-hidden">Next</span>'+
  '</button>'+
'</div>',
  "keywords": "vectorial, archivo, IDE, geojson, mapa, marco geoestadistico nacional INEGI, escala, nacional, proyeccion",
  "visualizador":{
    "x": -99.7083166,
    "y": 19.3866018,
    "zoom":5,
    "fileName":"mexico",
	"campo1":"0",
	"campo2":"1"
	}
    
  },
  {
    "id": 1,    
    "titulo": "Archivo raster de temperaturas",
    "categoria": "Cambio climatico",
    "descripcion": "Archivo raster en formato bil del volcán de Toluca.",
    "thumbnail": "2" ,
    "imagenLienzo": "2.1",
    "contenido": '<div class="alert alert-primary" role="alert">  A simple primary alert—check it out!</div><div class="alert alert-secondary" role="alert">  A simple secondary alert—check it out!</div>',
    "keywords": "raster, temperatura, volcan, nevado, montaña,laguna, altura, caliente, frio, flora",
    "visualizador":{
      "x": -72.091755,
      "y": -35.730280,
      "zoom":8,
      "fileName":"incendios",
      "campo1":1,
      "campo2": 2     
      }
  },
  {
    "id": 2,    
    "titulo": "Servio GeoJSON de sismos",
    "categoria": "Geologia",
    "descripcion": "Servicio en formato GeoJSON de temblores del USGS.",
    "thumbnail": "3",
    "imagenLienzo": "3.1",
    "contenido": '<div class="alert alert-primary" role="alert">  A simple primary alert—check it out!</div><div class="alert alert-secondary" role="alert">  A simple secondary alert—check it out!</div>',
    "keywords": "temblor, mexico, geojson, usgs, sismo, magnitud, escala, daños, 19 septiembre, hiroshima",
    "visualizador":{
      "x": -97.41612589770398,
      "y": 20.537515737364686,
      "zoom":5,
      "fileName":"puntos",
      "campo1":"CNTRY",
      "campo2":"name"      
      }
  },
  {
    "id": 3,    
    "titulo": "Carlos y Brenda",
    "categoria": "Geologia",
    "descripcion": "Servicio en formato GeoJSON de temblores del USGS.",
    "thumbnail": "3",
    "imagenLienzo": "3.1",
    "contenido": '<div class="alert alert-primary" role="alert">  A simple primary alert—check it out!</div><div class="alert alert-secondary" role="alert">  A simple secondary alert—check it out!</div>',
    "keywords": "temblor, mexico, geojson, usgs, sismo, magnitud, escala, daños, 19 septiembre, hiroshima",
    "visualizador":{
      "x": -97.41612589770398,
      "y": 20.537515737364686,
      "zoom":5,
      "fileName":"puntos",
      "campo1":"CNTRY",
      "campo2":"name"      
      }
  }
];


const carrusel=
'<div id="carouselExample" class="carousel slide">'+
  '<div class="carousel-inner">'+
    '<div class="carousel-item active">'+
      '<img src="./flores/1.jpg" class="d-block w-100" alt="...">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="./flores/2.jpg" class="d-block w-100" alt="...">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="./flores/3.jpg" class="d-block w-100" alt="...">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="./flores/4.jpg" class="d-block w-100" alt="...">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="./flores/5.jpg" class="d-block w-100" alt="...">'+
    '</div>	'+
  '</div>'+
  '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">'+
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
    '<span class="visually-hidden">Previous</span>'+
  '</button>'+
  '<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">'+
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
    '<span class="visually-hidden">Next</span>'+
  '</button>'+
'</div>';