import React from "react";

// eslint-disable-next-line react/prop-types
const SearchButton = ({ setList, setPage, value, setValue }) => {
    const api_key = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

    const fetchData = async () => {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${value}`,
        ).then((res) => res.json());

        setList(response.data);
        setPage(1);
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input type="button" value="Search" onClick={fetchData} />;
        </div>
    );
};

export default SearchButton;
