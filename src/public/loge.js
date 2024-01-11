const mensajeError = document.getElementsByClassName("error")[0]

document.getElementById("Logeo-1").addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/logeo", {
        method: "Post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });

    if (!res.ok) return mensajeError.classList.toggle("escondido", false);


    const resJson = await res.json();
    if (resJson.redirect) {
        window.location.href = resJson.redirect;
    };

});
