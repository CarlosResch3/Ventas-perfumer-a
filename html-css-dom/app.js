//Precio de los productos

const precios = {
    aqua: 200,
    emocion: 180,
    alegria: 160,
    frescura: 150,
};

//Validamos los valores que ingresamos

function validarValor(valor) {
    return !isNaN(valor) && valor >= 0;
}

//Funcion para calcular las ventas

function calcularVentas(){
    //Obtener ventas Juana
    const juanaAqua = parseInt(document.getElementById("juanaAqua"). value) || 0;
    const juanaEmocion = parseInt(document.getElementById("juanaEmocion"). value) || 0;
    const juanaAlegria = parseInt(document.getElementById("juanaAlegria"). value) || 0;
    const juanaFrescura = parseInt(document.getElementById("juanaFrescura"). value) || 0;

    //Validamos que sean números
    if (![juanaAqua, juanaEmocion, juanaAlegria, juanaFrescura].every(validarValor))
    {
        alert("Por favor ingresa valores numéricos");
        return
    }

    //Obtener las ventas de Pedro

    const pedroAqua = parseInt(document.getElementById("pedroAqua"). value) || 0;
    const pedroEmocion = parseInt(document.getElementById("pedroEmocion"). value) || 0;
    const pedroAlegria = parseInt(document.getElementById("pedroAlegria"). value) || 0;
    const pedroFrescura = parseInt(document.getElementById("pedroFrescura"). value) || 0;

    //Validamos que sean números
    if (![pedroAqua, pedroEmocion, pedroAlegria, pedroFrescura].every(validarValor))
    {
        alert("Por favor ingresa valores numéricos");
        return
    }

    //Calculamos la venta total de cada uno de los vendedores
    const totalJuana = (juanaAqua * precios.aqua) + (juanaEmocion * precios.emocion) + (juanaAlegria * precios.alegria) + (juanaFrescura * precios.frescura);
    const totalPedro = (pedroAqua * precios.aqua) + (pedroEmocion * precios.emocion) + (pedroAlegria * precios.alegria) + (pedroFrescura * precios.frescura);

    //Determinamos quien es el empleado del mes
    let resultado = "";
    if (totalJuana > totalPedro) {
        resultado = `Juana es la empleada del mes con $${totalJuana} recaudados.`;
    } else if (totalPedro > totalJuana){
        resultado = `Pedro es el empleado del mes con $${totalPedro} recaudados.`;
    } else {
        resultado = `Es un empate, ambos recaudaron $${totalJuana}.`;
    }

    //Mostrar el resultado en página

    document.getElementById("resultado").innerText = resultado
}

