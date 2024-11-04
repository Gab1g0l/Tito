function saveProduct() {
    // Obtener los valores de los campos del formulario
    const name = document.getElementById("productName").value;
    const description = document.getElementById("productDescription").value;
    const price = document.getElementById("productPrice").value;
    const image = document.getElementById("productImage").files[0];

    // Validación básica
    if (!name || !description || !price || !image) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear el objeto del producto
    const product = {
        name: name,
        description: description,
        price: price,
        imageURL: URL.createObjectURL(image) // Crear una URL temporal para la imagen
    };

    // Obtener los productos actuales del almacenamiento local
    let products = JSON.parse(localStorage.getItem("products")) || [];
    
    // Agregar el nuevo producto
    products.push(product);

    // Guardar en el almacenamiento local
    localStorage.setItem("products", JSON.stringify(products));

    // Confirmación
    alert("Producto guardado exitosamente.");
    
    // Limpiar el formulario
    document.getElementById("productForm").reset();
}

