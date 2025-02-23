document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const toggleDarkMode = document.querySelector(".toggle-dark-mode");
    const footer = document.querySelector("footer");
    const whatsappIcon = document.querySelector(".whatsapp");
    const notification = document.createElement("div");

    let index = 0;
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 150;
    const clickSound = new Audio("click.mp3");

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    nextButton.addEventListener("click", function () {
        clickSound.play();
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        clickSound.play();
        index = (index > 0) ? index - 1 : totalItems - 1;
        updateCarousel();
    });

    setInterval(() => {
        index = (index + 1) % totalItems;
        updateCarousel();
    }, 2000);

    // Modo oscuro dinámico
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        footer.classList.toggle("neon-glow");
    });

    // WhatsApp
    whatsappIcon.addEventListener("click", function () {
        const phoneNumber = "527773438771";
        const message = encodeURIComponent("¡Hola! Estoy interesado en tus productos. ¿Podrías darme más información?");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });

    // Cambiar el tema con el botón de modo oscuro
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('.carousel').classList.toggle('dark-mode');
        document.querySelectorAll('.product-price').forEach(price => price.classList.toggle('dark-mode'));
    });
});

const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.carousel').classList.toggle('dark-mode');
    const productPrices = document.querySelectorAll('.product-price');
    productPrices.forEach(price => {
        price.classList.toggle('dark-mode');
    });
});
