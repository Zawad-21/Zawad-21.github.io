import { setSearchFocus,showClearText,clearSearchText,clearPushListener} from './searchbar.js'
import { getSearchTerm} from './dataFunctions.js'
import { retrieveSearchResults} from './dataFunctions.js'
import { deleteSearchResults,buildSearchResult, clearStatsline, setStatsLine} from './searchResults.js'

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        initApp()
    }
})

const initApp = () => {
    setSearchFocus()
    const form = document.querySelector('.searchBar');
    form.addEventListener('submit', subMitTheSearch )
    const search = document.getElementById('search')
    search.addEventListener('input', showClearText)
    const clear = document.getElementById('clear')
    clear.addEventListener('click', clearSearchText)
    clear.addEventListener('keydown', clearPushListener)
}

const subMitTheSearch = (event) => {
    event.preventDefault()
    setSearchFocus()
    processTheSearch()
    deleteSearchResults()
}

const processTheSearch = async () => {
    clearStatsline()
    const searchTerm = getSearchTerm()
    if (searchTerm === '') return
    const resultArray = await retrieveSearchResults(searchTerm)
    if (resultArray.length) buildSearchResult(resultArray)
    setStatsLine(resultArray.length)
}

