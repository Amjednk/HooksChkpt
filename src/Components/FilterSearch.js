
import React from 'react';
import Rating from '@mui/material/Rating';
/*Search function takes serach input by movie title or rate*/ 
function FilterSearch ({defaultRate, getSearch, getRate}) {

    const handleChangeTitle = (e) => {
    e.preventDefault();
    getSearch(e.target.value);
    };

    return (
        <div>
            <div> 
                <input className='SearchBar'  size={58} type="text" placeholder="Search here" onChange={handleChangeTitle}/>
            </div>
            <Rating 
                name="simple-controlled"
                max = {10}
                defaultValue={defaultRate}
                onChange={(_event, newValue) => {
                    getRate(newValue);
                }}
            />
        </div>
    )
};

export default FilterSearch;