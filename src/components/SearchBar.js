import React from 'react';

const SearchBar = (props) => {

    const { fields, handleFieldChange, handleValueChange } = props;

    const generateDropdownFields = () => {
        const dropdownFields = [];
        dropdownFields.push(<option key="disabled" disabled selected>Select your filter field</option>)
        fields.map(field => {
            dropdownFields.push(
              <option key={field} value={field}> {field} </option>
            )
        })
        return dropdownFields;
    }

    return (
        <div className="flex flex-row align-center justify-center">
            <div className="flex flex-row align-center justify-around w-2/6">
                <select name="cars" id="cars" className="border-2 rounded w-48 h-10" onChange={(e) => handleFieldChange(e)}>
                    {generateDropdownFields()}
                </select>

                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" className="rounded form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"  onChange={handleValueChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;