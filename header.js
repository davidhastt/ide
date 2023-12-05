const header= '<nav class="navbar navbar-expand-lg bg-body-tertiary">'+
'<div class="container-fluid">'+
  '<a class="navbar-brand" href="#">IDE UAEM</a>'+
  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="navbar-toggler-icon"></span>'+
  '</button>'+
  '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
    '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
      '<li class="nav-item">'+
        '<a class="nav-link active" aria-current="page" href="#">Inicio</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="#">Catalogo</a>'+
      '</li>'+
      '<li class="nav-item dropdown">'+
        '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">'+
          'Servicios'+
        '</a>'+
        '<ul class="dropdown-menu">'+
          '<li><a class="dropdown-item" href="#"></a></li>'+
          '<li><a class="dropdown-item" href="#">WMS</a></li>'+
          '<li><hr class="dropdown-divider">WFS</li>'+
          '<li><a class="dropdown-item" href="#">WCS</a></li>'+
        '</ul>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link disabled">Login</a>'+
      '</li>'+
    '</ul>'+
    '<div class="d-flex" role="search">'+
      '<input id="palabrabusqueda" name="palabrabusqueda" class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">'+
      '<button class="btn btn-outline-success"  onclick="buscar()">Buscar</button>'+
    '</div>'+
  '</div>'+
'</div>'+
'</nav>';