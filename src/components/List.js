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
                <li key={pair.id} className="flex flex-row">
                    <div className="flex w-2/6 border-2 align-center justify-center"> {pair.id} </div>
                    <div className="flex w-2/6 border-2 align-center justify-center"> {pair.base_currency} </div>
                    <div className="flex w-2/6 border-2 align-center justify-center"> {pair.quote_currency} </div>
                </li>
            )
        })
    }

    return (
        <div className="w-screen flex align-center justify-center">
            <ul className="border-2 w-3/6">
                <li className="flex flex-row sticky top-0 bg-slate-300">
                    <div className="flex w-2/6 border-2 align-center justify-center"> <b> ID </b> </div>
                    <div className="flex w-2/6 border-2 align-center justify-center"> <b> Base Currency </b> </div>
                    <div className="flex w-2/6 border-2 align-center justify-center"> <b> Quote Currency </b> </div>
                </li>
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

