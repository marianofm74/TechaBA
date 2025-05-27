
// index.js
const [,,method, resource, ...args] = process.argv;

const BASE_URL = 'https://fakestoreapi.com';

// Función para obtener todos los productos
async function getProductos() {
try {
    fetch(`${BASE_URL}/products`)
    .then(response => response.json())
    .then(data => console.log(data));
    } catch (error) {
    console.error('Error al obtener productos:', error.message);
}
}
// Función para obtener un producto por ID
async function getProductoById(id) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`)
        
        const text = await response.text();
        if (!text) {
            console.log(`Producto con ID ${id} no encontrado.`);
            return;
        }
        // Convertir el texto a JSON
        const data = JSON.parse(text);


        if (!data || !data.id) {
            console.log(`Producto con ID ${id} no encontrado.`);
            } else {
            console.log(data);
            }      
    } catch (error) {
        console.error('Error al obtener el producto:', error.message);
    }
}
// Funcion para crear un producto

async function createProducto(title, price, category) {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            price: parseFloat(price),
            category
            })
            });
        
        const data = await response.json();
        console.log('Producto creado:', data);
    } catch (error) {
        console.error('Error al crear el producto:', error.message);
    }
    }

// Funcion para eliminar un producto
async function deleteProducto(id) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log(`Producto con ID ${id} eliminado.`);
        } else {
            console.log(`No se pudo eliminar el producto con ID ${id}.`);
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error.message);
    }
}

    

// Validar el método y el recurso

if (method === 'GET') {
	if (resource === 'products') {
        getProductos();
	} else if (resource.startsWith('products/')) {
        const id = resource.split('/')[1];
        getProductoById(id);
	} else {
        console.log('Recurso no reconocido. Usa: products o products/<id>');
	}
} else if (method === 'POST' && resource === 'products') {
	const [title, price, category] = args;
	if (!title || !price || !category) {
        console.log('Faltan argumentos. Usa: npm run start POST products <title> <price> <category>');
	} else {
        createProducto(title, price, category);
	}
} else if (method === 'DELETE' && resource.startsWith('products/')) {
    const id = resource.split('/')[1];
    if (!id) {
        console.log('Falta el ID del producto. Usa: npm run start DELETE products/<id>');
    } else {
        deleteProducto(id);
    }
} else {
        console.log('Comando no reconocido. Usa:');
        console.log('npm run start GET products');
        console.log('npm run start GET products/<id>');
        console.log('npm run start POST products <title> <price> <category>');
        console.log('npm run start DELETE products/<id>');
    }

 
    
