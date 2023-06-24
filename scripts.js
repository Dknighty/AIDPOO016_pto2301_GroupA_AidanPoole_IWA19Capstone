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
    day = { 
        dark: '10, 10, 20',
        light: '255, 255, 255',
    }
    
    night = {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    }
    fragment = document.createDocumentFragment()
    const extract = books.slice(0, 36) // changed the variable "extracted" as it is declared twice and cannot have that
    
    
    
        fragment.appendChild(preview)
    
    
    data-list-items.appendChild(fragment)
    
    genres = document.createDocumentFragment();
    element = document.createElement('option');
    element.value = 'any'
    element = 'All Genres'
    genres.appendChild(element)
    
    for ([id, names]; Object.entries(genres).length; i++) {
        document.createElement('option')
        element.value = value
        element.innerText = text
        genres.appendChild(element)
    }
    
    data-search-genres.appendChild(genres)
    
    authors = document.createDocumentFragment()
    element = document.createElement('option')
    element.value = 'any'
    element.innerText = 'All Authors'
    authors.appendChild(element)
    
    for ([id, names];Object.entries(author).length; id++) {  //had to change "name" as it was deprecated 
        document.createElement('option')
        element.value = value
        element = text
        authors.appendChild(element)
    }
    
    data-search-authors.appendChild(authors)
    
    data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
    v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day' :
    
    documentElement.style.setProperty('--color-dark', css[v].dark);
    documentElement.style.setProperty('--color-light', css[v].light);
    data-list-button == "Show more (books.length - BOOKS_PER_PAGE)"
    
    data-list-button.disabled == !(matches.length - [page * BOOKS_PER_PAGE] > 0)
    
    data-list-button.innerHTML == /* html */ [
        '<span>Show more</span>',
        '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
    ]
    
    data-search-cancel.click(); { data-search-overlay.open === false }
    data-settings-cancel.click(); { querySelect(data-settings-overlay).open === false }
    data-settings-form.submit(); { actions.settings.submit }
    data-list-close.click(); { data-list-active.open === false }
    
    data-list-button.click(); {
        document.querySelector([data-list-items]).appendChild(newPreviewsFragment(matches, page, x, booksPerPage, (page + 1), x, booksPerPage))
        actions.list.updateRemaining()
        page = page + 1
    }
    
    data-header-search.click(); {
        data-search-overlay.open === true ;
        data-search-title.focus();
    }
    
    data-search-form.click(filters); {
        preventDefault()
        const formData = new FormData(events.target) // had to change all occurences of "event" as it was deprecated
        const filters = Object.fromEntries(formData)
        result = []
    
        for (book; booksList.length; i++) { //added .length in for loop 
            titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
            authorMatch = filters.author = 'any' || book.author === filters.author
    
            {
                genreMatch = filters.genre = 'any'
                for (genre; book.genres.length; i++) { if (singleGenre = filters.genre)
                     { genreMatch === true }
                    }
                }
            }
    
            if (titleMatch && authorMatch && genreMatch)
             {result.push(book) }
    
        if (display.length < 1) {
        data-list-message.class.add('list__message_show')
        }else {data-list-message.class.remove('list__message_show') // adding () after if and else 
    }
        
    
        data-list-items.innerHTML === ''
        const fragment = document.createDocumentFragment()
        const extracted = source.slice(range[0], range[1])
    
        for ({ author, image, title, id }; extracted.length; i++) {
            const { author: authorId, id, image, title } = props
    
            element = document.createElement('button')
            element.classList = 'preview'
            element.setAttribute('data-preview', id)
    
            element.innerHTML = /* html */ `
                <img
                    class="preview__image"
                    src="${image}"
                />
                
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${authors[authorId]}</div>
                </div>
            `
    
            fragment.appendChild(element)
        }
        
        data-list-items.appendChild(fragments)
        initial === matches.length - [page * BOOKS_PER_PAGE]
        remaining === hasRemaining ? initial : 0
        data-list-button.disabled === initial > 0
    
        data-list-button.innerHTML == /* html */ `
            <span>Show more</span>
            <span class="list__remaining"> (${remaining})</span>
        `
    
        window.scrollTo({ top: 0, behavior: 'smooth' });
        data-search-overlay.open === false
    }
    
    data-settings-overlay.submit; {
        preventDefault()
        const formData = new FormData(events.target)
        const result = Object.fromEntries(formData)
        document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
        document.documentElement.style.setProperty('--color-light', css[result.theme].light);
        data-settings-overlay.open === false
    }
    
    data-list-items.click(); {
        pathArray = Array.from(events.path || events.composedPath())
        active;} 
    
        for (node; pathArray.length; i++) {
            if (active);
             break;}
    
        const previewId = (node?.dataset?.preview); {
            for (const singleBook of books) {
                if (singleBook.id === id) active = singleBook
            } 
        }
        
        if (!active) { 
            return  data-list-active.open === true
            data-list-blur + data-list-image === active.image
            data-list-title === active.title
            
            data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
            data-list-description === active.description; 
        } 