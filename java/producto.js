const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


function irADetalles(url) {
    window.location.href = url;
}

function comprarProducto(url) {
    window.location.href = url;
}

 // Función para cargar productos desde el localStorage
        function cargarProductos() {
            const productGrid = document.getElementById('product-grid');
            const productos = JSON.parse(localStorage.getItem('productos')) || [];

            productos.forEach(producto => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card'; // Usa la clase para aplicar el CSS
                productCard.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p>PRECIO: $${producto.precio}</p>
                    <button class="buy-button">Comprar</button> <!-- Botón para comprar -->
                `;
                productCard.onclick = () => irADetalles(producto.detalleLink);
                productGrid.appendChild(productCard);
            });
        }

        // Simulación de función de detalles de producto
        function irADetalles(url) {
            window.location.href = url;
        }

        // Cargar productos al iniciar la página
        window.onload = cargarProductos;
        // Función para cargar productos desde el localStorage
function cargarProductos() {
    const productGrid = document.getElementById('product-grid');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Ordenar productos por precio (de menor a mayor)
    productos.sort((a, b) => a.precio - b.precio);

    // Limpiar el grid antes de agregar productos para evitar duplicados
    productGrid.innerHTML = '';

    // Crear la tabla HTML y el encabezado
    const table = document.createElement('table');
    table.className = 'product-table';

    const tableHeader = `
        <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
        </tr>
    `;
    table.innerHTML = tableHeader;

    // Agregar cada producto como una fila en la tabla
    productos.forEach((producto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50"></td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>$${producto.precio}</td>
            <td>
                <button class="buy-button6" onclick="comprarProducto(${index})">Comprar</button>
                <button class="delete-button" onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
        `;
        table.appendChild(row);
    });

    productGrid.appendChild(table);
}

// Función para eliminar un producto
function eliminarProducto(index) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(index, 1); // Eliminar el producto seleccionado
    localStorage.setItem('productos', JSON.stringify(productos)); // Guardar los cambios en localStorage
    cargarProductos(); // Recargar la lista de productos
}

// Función de compra de producto (solo simulado)
function comprarProducto(index) {
    alert(`Producto ${index + 1} comprado!`);
}

// Cargar productos al iniciar la página
window.onload = cargarProductos();
