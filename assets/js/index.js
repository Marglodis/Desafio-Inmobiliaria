const propiedadesJSON = [
 
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://www.batiburrillo.net/wp-content/uploads/2019/02/Las-mansiones-ma%CC%81s-extravagantes-del-mundo.jpg.webp",
    rooms: 5,
    m: 500,
  }
  
];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let html = "";
for (let item of propiedadesJSON) {
  templateDepa(item);
}
let total = propiedadesJSON.length;
document.getElementById("total").innerHTML = "Total: " + total;

function buscar() {
  let total = 0;
  c = document.getElementById("cantidad");
  d = document.getElementById("desde");
  h = document.getElementById("hasta");
 const ele = document.querySelector(".propiedades");

 ele.innerHTML = html;
  if (c.value == "" || d.value == "" || h.value == "") {
    alert("Debe ingresar valores válidos");
    total=0;
  } else {
    html = "";
    for (let item of propiedadesJSON) {
      if ((item.rooms >= c.value) && (item.m >= d.value) && (item.m <= h.value)) {
        templateDepa(item);
        total++;
      }
    }
    if(total==0){
      alert("Sin resultados para su búsqueda")
     total=0;
    }
   
    document.getElementById("total").innerHTML = "Total: " + total;
  }
}

/////////////////////////////////////////////////////

function templateDepa(item) {
  let padre=document.querySelector(".propiedades")
  
  let div1=document.createElement("div")
  let div2=document.createElement("div")
  let seccion = document.createElement("section")
  let h5=document.createElement("h5")
  let div3=document.createElement("div")
  let p1=document.createElement("p")
  let p2=document.createElement("p")
  let p3=document.createElement("p")
  let btn=document.createElement("button")
  
  div1.className = "propiedad";
  div2.className = "img";
  div2.style.backgroundImage = `url(${item.src})`;
  p3.className = "my-3";
  div3.className = "d-flex justify-content-between";
  btn.className = "btn btn-info";
  
  
  h5.innerHTML = item.name;
  p1.innerHTML ="Cuartos: " + item.rooms;
  p2.innerHTML ="Metros: " + item.m;
  p3.innerHTML =item.description;
  btn.textContent = "Ver más";
   

  padre.appendChild(div1);
  div1.appendChild(div2);
  div1.appendChild(seccion);
  seccion.appendChild(h5);
  seccion.appendChild(div3);
  div3.appendChild(p1);
  div3.appendChild(p2);
  seccion.appendChild(p3);
  seccion.appendChild(btn);

}