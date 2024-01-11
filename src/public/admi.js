
document.getElementsByTagName("button")[0].addEventListener("click", () => {
    document.cookie = 'jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.location.href = "/"
})



document.getElementById("ATMiN").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
    var cuerpo= e.target.contador.value 
    var direccion="http://localhost:3000/admin/app/api/"

    resul = direccion  +cuerpo
    
    window.location.href = resul ;
});

