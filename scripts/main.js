/* IMPORT DATA FILE FOR COLLECTIONS AND CREATE/SELL SECTIONS */

import { data } from "../js/data.js"

// RESPONSIVE NAVBAR

const mobileMenuPanel = document.querySelector('.mobile-menu-panel')
const toggleButton = document.querySelector('.toggle-button')
const closeButton = document.querySelector('.close-icon')

toggleButton.addEventListener('click', () => {
    mobileMenuPanel.classList.add('open')
    document.body.classList.add('blur')
})

closeButton.addEventListener('click', () => {
    mobileMenuPanel.classList.remove('open')
    document.body.classList.remove('blur')
})

// overlay

const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.appendChild(overlay)

toggleButton.addEventListener('click', () => {
    mobileMenuPanel.classList.add('open')
    overlay.classList.add('show')
    document.body.classList.add('blur')
})

closeButton.addEventListener('click', () => {
    mobileMenuPanel.classList.remove('open')
    overlay.classList.remove('show')
    document.body.classList.remove('blur')
})

// OUR COLLECTION SECTION 
const collectionContainer = document.querySelector('.collection-container')

data.collection.forEach(element => {
    // Creating collectionCard for each collection in collectionContainer
    let collectionCard = document.createElement('div')
    collectionCard.classList.add('collection-card', element.category, 'hide')

    let imageContainer = document.createElement('div')
    imageContainer.classList.add('img-container')

    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    imageContainer.appendChild(image);
    collectionCard.appendChild(imageContainer)

    let collectionDetails = document.createElement('div')
    collectionDetails.classList.add('collection-details')

    let collectionTitle = document.createElement('h3')
    collectionTitle.textContent = element.collectionName
    collectionDetails.appendChild(collectionTitle)

    let collectionPrice = document.createElement('div')
    collectionPrice.classList.add('collection-price')

    let priceIcon = document.createElement('img')
    priceIcon.src = element.icon;
    collectionPrice.appendChild(priceIcon);

    let collectionAmount = document.createElement('h4')
    collectionAmount.textContent = element.price
    collectionPrice.appendChild(collectionAmount)

    collectionDetails.appendChild(collectionPrice)
    collectionCard.appendChild(collectionDetails)

    let collectionButton = document.createElement('button')
    collectionButton.classList.add('button-value')
    collectionButton.textContent = element.buttonText
    collectionCard.appendChild(collectionButton)

    collectionContainer.appendChild(collectionCard)
})

// Collection Filter Function

//parameter passed from button (Parameter same as category)
export function filterCollection(value) {
  //Button class code
  let buttons = document.querySelectorAll('.button-value')
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  })

  //select all cards
  let elements = document.querySelectorAll('.collection-card');
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == 'all') {
      element.classList.remove('hide')
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove('hide')
      } else {
        //hide other elements
        element.classList.add('hide')
      }
    }
  });
}

//Initially display all products
window.onload = () => {
  filterCollection('all')
}

// CREATE AND SELL SECTION 
const cardContainer = document.querySelector('.card-container')

data.cardInfo.forEach(card => {
    // Creating cardElement for card Element
    let cardElement = document.createElement('div')
    cardElement.classList.add('card')

    // Creating IconContainer Element
    let iconContainer = document.createElement('div')
    iconContainer.classList.add('icon-container')

    // Creating Icon Element
    let icon = document.createElement('img');
    icon.src = card.icon;
    iconContainer.appendChild(icon);

    // Creating cardTitle Element 
    let cardTitle = document.createElement('h3')
    cardTitle.textContent = card.title

    // Creating cardDescription Element
    let cardDescription = document.createElement('p')
    cardDescription.textContent = card.description

    // Appending each element into cardContainer
    cardElement.appendChild(iconContainer)
    cardElement.appendChild(cardTitle)
    cardElement.appendChild(cardDescription)
    cardContainer.appendChild(cardElement)
})

