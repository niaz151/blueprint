const List = (props) => {

    const { field, value, data } = props;

    const generateListItems = () => {
        return data.map(pair => {
            if (field === undefined || value === undefined) {
                return (
                    <li key={pair.id} className="flex flex-row">
                        <div className="flex w-2/6 border-2 justify-center"> {pair.id} </div>
                        <div className="flex w-2/6 border-2 justify-center"> {pair.base_currency} </div>
                        <div className="flex w-2/6 border-2 justify-center"> {pair.quote_currency} </div>
                    </li>
                )
            }
            else {
                if (pair[field].includes(value.toUpperCase())) {
                    return (
                        <li key={pair.id} className="flex flex-row">
                            <div className="flex w-2/6 border-2 justify-center"> {pair.id} </div>
                            <div className="flex w-2/6 border-2 justify-center"> {pair.base_currency} </div>
                            <div className="flex w-2/6 border-2 justify-center"> {pair.quote_currency} </div>
                        </li>
                    )
                }
            }
        })
    }

    return (
        <div className="w-screen flex justify-center mt-5">
            <ul className="lg:w-4/6 md:w-4/6 sm:w-5/6">
                <li className="flex flex-row sticky top-0 bg-slate-300">
                    <div className="flex w-2/6 border-2 justify-center"> <b> ID </b> </div>
                    <div className="flex w-2/6 border-2 justify-center"> <b> Base Currency </b> </div>
                    <div className="flex w-2/6 border-2 justify-center"> <b> Quote Currency </b> </div>
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

