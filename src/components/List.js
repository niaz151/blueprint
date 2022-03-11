const List = (props) => {

    const { field, value, data } = props;

    const generateListItems = () => {
        return data.map(pair => {
            if (field === undefined || value === undefined) {
                return (
                    <li key={pair.id} className="flex flex-row">
                        <div className="flex w-2/6 border-2 align-center justify-center"> {pair.id} </div>
                        <div className="flex w-2/6 border-2 align-center justify-center"> {pair.base_currency} </div>
                        <div className="flex w-2/6 border-2 align-center justify-center"> {pair.quote_currency} </div>
                    </li>
                )
            }
            else {
                if (pair[field].includes(value.toUpperCase())) {
                    return (
                        <li key={pair.id} className="flex flex-row">
                            <div className="flex w-2/6 border-2 align-center justify-center"> {pair.id} </div>
                            <div className="flex w-2/6 border-2 align-center justify-center"> {pair.base_currency} </div>
                            <div className="flex w-2/6 border-2 align-center justify-center"> {pair.quote_currency} </div>
                        </li>
                    )
                }
            }
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

// Defining default props to make passing in filter props optional
List.defaultProps = {
    field: undefined,
    value: undefined,
};

export default List;

