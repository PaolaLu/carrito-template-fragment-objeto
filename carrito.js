const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

//TODO: constante donde se agregan los productos
//
//
const carritoObjeto = {};
//TODO:  funcion donde se agregan los productos
//

const agregarCarrito = (e) => {
  console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  if (carritoObjeto.hasOwnProperty(producto.titulo)) {
    producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
  }
  carritoObjeto[producto.titulo.id] = producto;
  pintarCarrito(producto);
  console.log(carritoObjeto);
};
//
//
//
const pintarCarrito = (producto) => {
  carrito.textContent = "";
  Object.values(carritoObjeto).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  //
  //
  //
  carrito.appendChild(fragment);
};

//TODO: funcion detectar botones recorrido con un foreach cada ver que se haga un click se agrega al carrito

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarCarrito));
