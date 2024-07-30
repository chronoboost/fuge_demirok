


document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <p class="footer-title">Füge Demirok</p>
        <p>&copy; ${currentYear}</p>
    `;
})