alert("Bienvenido a HardwareZone")
const listaProductos = [
    { producto: "placa de video", precio: 55000 },
    { producto: "monitor asus", precio: 70000 },
    { producto: "microprocesador", precio: 40000 },
    { producto: "memoria RAM", precio: 10000 },
    { producto: "refrigeracion liquida", precio: 15000 },
    { producto: "gabinete gamer", precio: 5000 },
    { producto: "disco solido SSD", precio: 25000 },
]

let carrito = []

let seleccion = prompt("Hola quiere comprar alguno de nuestros productos? si o no?")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no?")
}
if (seleccion == "si" || seleccion == "SI") {
    alert("esta es nuestra lista de productos")
    let listaDeArticulos = listaProductos.map(
        (articulos) => articulos.producto + " " + articulos.precio + "$")
    alert(listaDeArticulos.join(" \n "))
} else if (seleccion == "no") {
    pregunta = prompt("estas seguro que quieres salir? ingresa si o no")
    if (pregunta == "no") {
        alert("esta es nuestra lista de productos")
        let listaDeArticulos = listaProductos.map(
            (articulos) => articulos.producto + " " + articulos.precio + "$")
        alert(listaDeArticulos.join(" \n "))
    } else if (pregunta == "si") {
        alert("muchas gracias por venir, esperamos que vuelvas pronto!!")
    }
}

while (seleccion != "no") {
    let producto = prompt("eleji uno de nuestros productos")
    let precio = 0
    if (producto == "placa de video" || producto == "monitor asus" || producto == "microprocesador" || producto == "memoria RAM" || producto == "refrigeracion liquida" || producto == "gabinete gamer" || producto == "disco solido SSD") {
        switch (producto) {
            case "placa de video":
                precio = 55000
                break;

            case "monitor asus":
                precio = 70000
                break
            case "memoria RAM":
                precio = 10000
                break
            case "microprocesador":
                precio = 40000
                break
            case "refrigeracion liquida":
                precio = 15000
                break
            case "disco solido SSD":
                precio = 25000
                break
            case "gabinete gamer":
                precio = 5000
                break
            default:
                break

        }
        let cantidadDeUnidades = parseInt(prompt("Cuantas Unidades Quiere llevar?"))
        carrito.push({ producto, cantidadDeUnidades, precio })
    } else {
        alert("Lo Sentimos No tenemos ese producto en STOCK")
    }
    seleccion = prompt("quiere continuar comprando?")
    while (seleccion === "no") {
        alert("gracias Asta Luego")
        carrito.forEach((carritoTotal) => {
            alert(`producto: ${carritoTotal.producto},unidades:${carritoTotal.cantidadDeUnidades},total a pagar ${carritoTotal.cantidadDeUnidades * carritoTotal.precio}  ` )
        })
        break

    }
}

const totalCompra = carrito.reduce((acc, el) => acc + el.precio * el.cantidadDeUnidades, 0)
alert(`el total a pagar es :$${totalCompra}`)
alert("Muchas Gracias por su compra")
