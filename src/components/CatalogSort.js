import React from 'react';


export const CatalogSort = ({ selectedType }) => {

    const sortItems = [
        { name: 'all', type: '' },
        { name: 'decrease price', type: 'desc' },
        { name: 'increase price', type: 'asc' },
    ];

    const selectSortItem = (type) => {
        selectedType(type);
    }

    return (
        <div className="catalog-sort">
            <span className="text">Sort by:</span>
            <select className="nice-select" onChange={(event) => selectSortItem(event.target.value)}>
                {sortItems.map((obj, index) => (
                    <option value={obj.type}
                        key={index}>{obj.name}</option>))}


            </select>
        </div>
    )
}