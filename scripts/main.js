document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <div class="header-div">
        <a class="header-title" href="/index.html"><h1>Füge Demirok</h1></a>
        </div>
        <nav class="navbar">
        <ul class="navbar-items">
        <li><a id="sculpture" class="navbar-item first-item" href="/pages/sculpture.html">Sculpture</a></li>
        <li><a id="painting" class="navbar-item" href="/pages/painting.html">Painting</a></li>
        <li><a id="multimedia" class="navbar-item" href="/pages/multimedia.html">Multimedia</a></li>
        <li><a id="print" class="navbar-item" href="/pages/print.html">Print</a></li>
        <li><a id="about" class="navbar-item last-item" href="/pages/about.html">About</a></li>
        </ul>
        </nav>
    `;
})

document.addEventListener("DOMContentLoaded", function() {
    const current = document.querySelector('h2').innerText;
    const header = document.getElementById(`${current}`);
    if(header) {
        header.classList.add('current');
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <p class="footer-title">Füge Demirok</p>
        <p>&copy; ${currentYear}</p>
    `;
})