const currentPage = document.querySelector('h2').innerText.toLowerCase();
const gallery = document.getElementById(currentPage + '-gallery');

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
    const header = document.getElementById(`${currentPage}`);
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


fetch('/data/FD-catalog.json')
    .then(response => response.json())
    .then(data => {
        const currentType = document.querySelector('h2').innerText;
        console.log(currentType);
        const filteredItems = data.filter(item => item.Type === currentType);
        console.log(filteredItems);
        const itemContent = filteredItems.map(item => {
            return `
                <div class="gallery-grid-img">
                    <a href="/pages/details.html?id=${item.ID}"><img src="/data/downloaded_images/${item.ImagePaths[0]}" alt="${item.Title}"></a>
                </div>
            `;
        }).join('');
        if (gallery) {
            gallery.innerHTML = itemContent;
        };
    })
    .catch(error => {
    console.error('Error fetching the catalog:', error);
});