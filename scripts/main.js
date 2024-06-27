// fetch('data/FD-catalog.json')
//     .then(response => response.json())
//     .then(data => {
//         const firstItem = data[62]; 
//         const itemContent = `
//             <h2>${firstItem.Title}</h2>
//             <img src="/data/downloaded_images/${firstItem.ImagePaths[0]}" alt="${firstItem.Title}">
//             <p>${firstItem.Description}</p>
//             <p>Artist: ${firstItem.Artist}</p>
//             <p>Type: ${firstItem.Type}</p>
//         `;
//         document.getElementById('gallery-preview').innerHTML = itemContent;
//     })
//     .catch(error => {
//         console.error('Error fetching the catalog:', error);
//     });


document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <p class="footer-title">Füge Demirok</p>
        <p>&copy; ${currentYear}</p>
    `;
})