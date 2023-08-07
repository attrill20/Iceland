import { useState} from 'react'

function SearchBar ({food, setFood}) {

    const [input, setInput] = useState('')
    const [filteredItem, setFilteredItem] = useState(null)
    
    function handleInput(event){
        setInput(event.target.value)
    }

    async function fetchFilteredItem() {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${input}`); // fetching a product by search
        const data = await response.json();
        console.log(data);
        setFilteredItem(data);
      }
    
      fetchFilteredItem();

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search for a product"/>
            <button>Search</button>
        </div>
    )
}

export default SearchBar;