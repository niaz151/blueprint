import React from 'react';

const SearchBar = (props) => {

    const { fields, handleFieldChange, handleValueChange } = props;

    const generateDropdownFields = () => {
        const dropdownFields = [];
        dropdownFields.push(<option key="disabled" disabled>Select your filter field</option>)
        fields.map(field => {
            dropdownFields.push(
                <option key={field} value={field}> {field} </option>
            )
        })
        return dropdownFields;
    }

    return (
        <div className="flex justify-center w-screen mt-5">
            <div className="flex lg:flex-row sm:flex-col">
                <select name="cars" id="cars" className="border-2 rounded h-10" onChange={(e) => handleFieldChange(e)}>
                    {generateDropdownFields()}
                </select>
                <input type="search" className="rounded relative flex-auto min-w-0 block px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" onChange={handleValueChange} />
            </div>
        </div>
    )
}

export default SearchBar;