
function displayGallery() {
    fetch('/data/FD-catalog.json')
        .then(response => response.json())
        .then(data => {
            const currentType = document.querySelector('h2').innerText;
            const filteredItems = data.filter(
                item => item.Type === currentType
            );
            renderGalleryItems(filteredItems, currentType);
        })
        .catch((error) => {
            console.error("Error rendering gallery items: ", error)
        });
};

function renderGalleryItems(items, type) {
    let gallerySection = document.querySelector('section.gallery');
    let galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery-container');
    galleryDiv.setAttribute('id', `${type}-gallery`);
    
    
    items.forEach((item) => {
        let itemCard = document.createElement('div');
        itemCard.classList.add('gallery-grid-img');
        
        let galleryItemLink = document.createElement('a');
        galleryItemLink.setAttribute('href', `pages/details.html?id=${item.ID}`);
        
        let galleryImg = document.createElement('img');
        galleryImg.setAttribute('src', `data/downloaded_images/${item.ImagePaths[0]}`);
        galleryImg.setAttribute('alt', item.Title);
        
        galleryItemLink.appendChild(galleryImg);
        itemCard.appendChild(galleryItemLink);
        galleryDiv.appendChild(itemCard);
    });
    
    gallerySection.appendChild(galleryDiv);
    
};

displayGallery();