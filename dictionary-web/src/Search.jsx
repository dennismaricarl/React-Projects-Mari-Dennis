import { useState } from "react";
import Definition from "./Definition";
import Word from "./Word";
import TopBar from "./TopBar";
import { ReactComponent as SearchIcon } from './images/icon-search.svg';

const Search = () => {

    const [findWord, setFindWord] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${findWord}`)
            const result = await response.json()
            console.log(result)

            if (result) {
                setFindWord(result[0])
            }

        } catch (error) {
            console.log("error")
        }


    };

    return (
        <>
            <TopBar />
            <SearchIcon className='search-icon' onClick={handleSubmit} />
            <input className='input' type="text" onChange={(e) => setFindWord(e.target.value)} />
            <Word findWord={findWord} />
            <Definition findWord={findWord} />


        </>
    )
}

export default Search;