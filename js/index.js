function emailjs(form) {
    const formEl = document.querySelector(".form");

    formEl.addEventListener("submit", async (Input) => {
        Input.preventDefault();

        const request = {
            nombre: input.target.nombre.value, 
            email: input.target.email.value, 
            consulta: input.target.consulta.value,
        };

        var serviceID = "service_u8lpjs7";
        var templateID = "template_ose5m34";
        
        try {
            await emailjs.send(serviceID, templateID, request)
            alert("Gracias por contactarnos!")
        }   catch (err) {
            console.error(err);
        }
    });
}

emailjs();