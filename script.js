document.getElementById('show-login-button').addEventListener('click', function() {
    window.open('login.html', '_blank');
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === 'fiap@gmail.com' && password === 'espv1') {
        alert('Login confirmado!');
    } else {
        alert('Nome de usuário ou senha incorretos, favor digitar novamente.');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

   
    if (nome && email && mensagem) {
        alert('Formulário enviado com sucesso!');
       
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("alertButton").addEventListener("click", () => {
        alert("Alerta criado!");
    });

  
    document.getElementById("loginButton").addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === "admin" && password === "1234") {
            alert("Login bem-sucedido!");
        } else {
            alert("Username ou senha incorretos.");
        }
    });

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

    document.getElementById("effectButton").addEventListener("click", () => {
        document.getElementById("effectBox").classList.toggle("transformed");
    });
});

function updateDOM() {
    const responsiveTest = document.getElementById("responsiveTest");
    responsiveTest.innerText = "Responsividade ativa!";
}

updateDOM();


