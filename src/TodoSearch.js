import React from "react";

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Los usuarios buscan ' + searchValue);

    return(
        <input 
        placeholder="Create SP User"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
    );
}

export {TodoSearch};