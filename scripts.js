import { authors } from "./data.js"; 
import { books } from "./data.js";
import { genres } from "./data.js"; 
import { BOOKS_PER_PAGE} from "./data.js"

const listItems = document.querySelector('[data-list-items]')
const listMessage = document.querySelector('[data-list-message]')
const moreButton = document.querySelector('[data-list-button]')
const listActive = document.querySelector('[data-list-active]')
const listBlur = document.querySelector('[data-list-blur]')
const listImage = document.querySelector('[data-list-image]')   // in order for the preview to work elements from the DOM needed to be retrieved using a document.queryselector
const listTitle = document.querySelector('[data-list-title]')
const listSubtitle = document.querySelector('[data-list-subtitle]')
const listDescription = document.querySelector('[data-list-description]')
const listClose = document.querySelector('[data-list-close]') 


let matches = books;
let page = 1;                                           // added in a "let" so as to declare the variables 
const range = [0 , BOOKS_PER_PAGE]; 

if (!books || !Array.isArray(books)) { // changed the && to || 
    throw new Error('Source required') // moved {} line down so as to increase readability 
 }
if (!range && range.length === 2) { 
    throw new Error('Range must be an array with two numbers')
} 
const newPreview = (preview) => {
    const { author: authorId, id, image, title } = preview // destructuring the array so as to extract the elements of the authors array
    const showPreview = document.createElement("button"); // creates a button in order to present a preview of the books 
    showPreview.classList = 'preview' 
    showPreview.setAttribute('data-preview', id)

showPreview.innerHTML = /* html */ `

<div class="preview__info">
    <h3 class="preview__title">${title}</h3>
    <div class="preview__author">${authors[authorId]}</div>
</div>
`

return showPreview
} 

const bookFragment = document.createDocumentFragment()

const startOfIndex = (page - 1) * BOOKS_PER_PAGE // this will ensure that the pages start a 0 and go to 36.  EG page one will actually be page 0
const endOfIndex = startOfIndex + BOOKS_PER_PAGE

const bookExtracted = books.slice(startOfIndex, endOfIndex)

// loop iterates over the book previews to display on current page 
for (const preview of bookExtracted) {
    
    const showPreview = newPreview(preview)
    bookFragment.appendChild(showPreview)
}

// appends the button to the bookFragment container
listItems.appendChild(bookFragment)

/**
 * This sets up a click event listener for the "Show More" button. When clicked, 
 * the code executes the logic to display the next set of book previews.
 */
moreButton.addEventListener('click', () => {
    page++;

    const newStartIndex = (page - 1) * BOOKS_PER_PAGE
    const newEndIndex = newStartIndex + BOOKS_PER_PAGE

    const newBookExtracted = books.slice(newStartIndex, newEndIndex)

    const newBookFragment = document.createDocumentFragment()

    for (const preview of newBookExtracted) {
        const showPreview = newPreview(preview)
        newBookFragment.appendChild(showPreview)
    }

    listItems.appendChild(newBookFragment);

    const remaining = matches.length - page * BOOKS_PER_PAGE;
    moreButton.innerHTML = /* HTML */ `
      <span>Show more</span>
      <span class="list__remaining"> (${remaining > 0 ? remaining : 0})</span>
    `;

    moreButton.disabled = remaining <= 0;
})


moreButton.innerHTML = /* HTML */
    `<span>Show more</span>
    <span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>
    `;
   