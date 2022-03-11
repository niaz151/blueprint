import React, { useState, useEffect } from 'react';

// Filtering can be dynamically passed in making the component more reusable
const List = (props) => {
    // If using Typescipt, I would create an interface to match the JSON object 
    // and make the paramters optional with '?'
    const [pairs, setPairs] = useState([]);

    useEffect(() => {
        const API_ENDPOINT = "https://api.exchange.coinbase.com/products";
        fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(data => {
                // If props for filter and value are provided, apply them
                // Otherwise render all API data
                (props.field !== undefined && props.value !== undefined) ? setPairs(data.filter(pair => pair[props.field] === props.value)) : setPairs(data);
            })
            .catch(error => {
                console.log("Error Fetching API Data", error);
            })
    }, [])

    const generateListItems = () => {
        return pairs.map(pair => {
            return (
                <li key={pair.id}>
                    <div> {pair.id} </div>
                    <div> {pair.base_currency} </div>
                    <div> {pair.quote_currency} </div>
                </li>
            )
        })
    }

    return (
        <div className="border-2">
            <ul className="border-2">
                {generateListItems()}
            </ul>
        </div>
    )
}

// Defining default props to make passing in props optional
List.defaultProps = {
    field: undefined,
    value: undefined
};

export default List;

