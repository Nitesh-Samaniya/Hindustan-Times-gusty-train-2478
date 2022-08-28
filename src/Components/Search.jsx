import { Search2Icon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)
function SearchNews(){
    return (
        <div style={{display:'flex',gap:'0.5rem'}}>
            <div><Search2Icon /></div>
            <div>Search</div>
        </div>
    );
}

export default SearchNews;