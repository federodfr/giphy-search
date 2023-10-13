import React from "react";

// eslint-disable-next-line react/prop-types
const LoadMoreButton = ({ list, setList, page, setPage, value }) => {
    const api_key = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";

    const fetchData = async () => {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${value}&offset=${
                page * 50
            }`,
        ).then((res) => res.json());
        console.log("list", list);
        console.log("response", response.data);
        // eslint-disable-next-line react/prop-types
        setList(list.concat(response.data));
        setPage(page + 1);
    };

    return <input type="button" value="Load More" onClick={fetchData} />;
};

export default LoadMoreButton;
