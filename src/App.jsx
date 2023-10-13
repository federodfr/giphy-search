import React, { useState } from "react";
import SearchButton from "./components/SearchButton";
import GifContainer from "./components/GifContainer";
import LoadMoreButtom from "./components/LoadMoreButton";

import "./App.css";

function App() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);

    console.log(list);
    return (
        <div className="App">
            <SearchButton
                setList={setList}
                setPage={setPage}
                setValue={setValue}
                value={value}
            />
            <GifContainer list={list} />
            {list.length > 0 && (
                <LoadMoreButtom
                    list={list}
                    setList={setList}
                    page={page}
                    setPage={setPage}
                    value={value}
                />
            )}
        </div>
    );
}

export default App;
