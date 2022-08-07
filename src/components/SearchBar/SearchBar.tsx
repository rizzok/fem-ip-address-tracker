import { buttonCss, formCss, inputCss } from './SearchBar.css'

export const SearchBar = () => {
  return (
    <form className={formCss}>
      <input
        className={inputCss}
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" className={buttonCss}>
        {'>'}
      </button>
    </form>
  )
}
