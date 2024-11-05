document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

const form = document.getElementById('product-form');
const productTableBody = document.getElementById('product-table-body');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const nombre = document.getElementById('nombre-producto').value;
    const descripcion = document.getElementById('descripcion-producto').value;
    const precio = document.getElementById('precio-producto').value;
    const imagen = document.getElementById('imagen-producto').files[0];

    
    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: URL.createObjectURL(imagen) 
    };

   
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    
    productos.push(producto);

   
    localStorage.setItem('productos', JSON.stringify(productos));

   
    form.reset();
    alert('Producto guardado exitosamente!');
    
    window.location.href = "producto.html";
});


