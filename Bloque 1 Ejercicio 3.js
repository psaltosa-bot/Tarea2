const producto = "Laptop";
let productoInvertido = "";
for (let i = producto.length - 1; i >= 0; i--) {
  productoInvertido += producto[i];
}
console.log(productoInvertido);
