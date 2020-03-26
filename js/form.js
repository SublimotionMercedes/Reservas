document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let domicilio = document.querySelector('#domicilio').value;
    let entrega = document.querySelector('#entrega').value;
    let producto = document.querySelector('#producto').value;

    let url = "https://api.whatsapp.com/send?phone=3773560919&text=*_Sublimotion Mercedes_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu reserva*%0A" + fecha + "%0A*El domicilio para entrega*%0A" + domicilio + "%0A*Como realizar la entrega*%0A" + entrega + "%0A*Producto que desea comprar*%0A" + producto;
    window.open(url);

});
