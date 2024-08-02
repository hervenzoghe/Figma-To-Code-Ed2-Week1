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
      if (value == 'all categories') {
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
    filterCollection('all categories')
  }