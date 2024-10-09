const params = new URLSearchParams(window.location.search);
const itemId = params.get('id');
console.log('itemID: ', itemId);

fetch('../data/FD-catalog.json')
    .then(response => response.json())
    .then(data => {
        const item = data[itemId -1];
        console.log('item: ', item);
        if(item) {
            let detailsDiv = document.getElementById('item-details');

            // images
            let detailsImgDiv = document.createElement('div');
            detailsImgDiv.classList.add('details-img-div');

            item.ImagePaths.forEach(path => {
                let detailsImg = document.createElement('img');
                detailsImg.setAttribute('src', `../data/downloaded_images/${path}`);
                detailsImg.setAttribute('alt', `${item.Title}, a ${item.Type}`);
                detailsImg.setAttribute('style', 'max-height: 900px;max-width: 1080px;margin-bottom: 1rem;');
                
                detailsImgDiv.appendChild(detailsImg);
            });

            detailsDiv.appendChild(detailsImgDiv);

            let detailsSticky = document.createElement('div');
            detailsSticky.classList.add('details-sticky');

            // title
            let detailsTitle = document.createElement('h3');
            detailsTitle.innerText = item.Title;
            detailsTitle.classList.add('details-title');
            detailsSticky.appendChild(detailsTitle);

            // description
            let descriptionText = item.Description.split('<br>');
            let detailsDescription = document.createElement('p');
            detailsDescription.classList.add('details-description');

            descriptionText.forEach((line, index) => {
                detailsDescription.appendChild(document.createTextNode(line));
                
                if (index < descriptionText.length - 1) {
                    detailsDescription.appendChild(document.createElement('br'));
                }
            });

            detailsSticky.appendChild(detailsDescription);

            detailsDiv.appendChild(detailsSticky);

        } else {
            let errorH3 = document.createElement('h3');
            errorH3.innerText = 'Item not found';
            detailsDiv.appendChild(errorH3);
        }
    })
    .catch(error => console.error('Error loading item details: ', error));