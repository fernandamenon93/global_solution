
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica as credenciais (exemplo simples, não seguro para produção)
    if (username === 'fiap@gmail.com' && password === 'espv1') {
        alert('Login confirmado!');
    } else {
        alert('Nome de usuário ou senha incorretos, favor digitar novamente.');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Criar Alerta
    document.getElementById("alertButton").addEventListener("click", () => {
        alert("Alerta criado!");
    });

    // Validação de Login
    document.getElementById("loginButton").addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === "admin" && password === "1234") {
            alert("Login bem-sucedido!");
        } else {
            alert("Username ou senha incorretos.");
        }
    });

    // Carrossel Dinâmico
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    document.getElementById("next").addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add("active");
    });

    document.getElementById("prev").addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
    });

    // Efeitos Diversos
    document.getElementById("effectButton").addEventListener("click", () => {
        document.getElementById("effectBox").classList.toggle("transformed");
    });

    // Responsividade (já implementada no CSS)
});

// Manipulação do DOM
function updateDOM() {
    const responsiveTest = document.getElementById("responsiveTest");
    responsiveTest.innerText = "Responsividade ativa!";
}

updateDOM();

