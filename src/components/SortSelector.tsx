import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs';

interface Prop {
    selectSortOrder: (ordering: string) => void;
    selectedSortOrder: string | '';
}

const SortSelector = ({ selectSortOrder, selectedSortOrder }: Prop) => {

    const sortArray = [{name: 'Relevance', value: ''}, 
                       {name: 'Date Added', value: '-added'},
                       {name: 'Name', value: 'name'},
                       {name: 'Release Date', value: '-released'},
                       {name: 'Popularity', value: 'metacritic'}, 
                       {name: 'Average Rating', value: '-rating'}];

    const sortName = sortArray.find(e => e.value === selectedSortOrder)?.name;

    return (
         <Menu>
           <MenuButton as={Button} rightIcon={ <BsChevronDown />}>Order by: {sortName? sortName: 'Relevance'}</MenuButton>
           <MenuList>
              { sortArray.map(data => <MenuItem key={data.value} onClick={()=> selectSortOrder(data.value)}>{data.name}</MenuItem> )}
           </MenuList>
        </Menu>
    )
}

export default SortSelector;