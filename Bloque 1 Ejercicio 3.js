const producto = "Laptop";
let productoInvertido = "";

// El bucle empieza en el último caracter y va retrocediendo hasta el primero
for (let i = producto.length - 1; i >= 0; i--) {
  // En cada paso, se añade el caracter actual al final del nuevo string
  productoInvertido += producto[i];
}
console.log(productoInvertido);
