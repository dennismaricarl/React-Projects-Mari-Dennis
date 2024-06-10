import { useState } from "react";
import Definition from "./Definition";
import Word from "./Word";
import { ReactComponent as SearchIcon } from './images/icon-search.svg';

const Search = () => {

    const [findWord, setFindWord] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage(" ")
        setError(" ")

        if (!findWord) {
            setMessage('Please enter a word.')
            return
        }

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${findWord}`)
            const result = await response.json()
            console.log(result)

            if (response.ok) {
                setFindWord(result[0])
            } else {
                setError(`${result.title}: ${result.message}`)

                const timer = setTimeout(() => {
                    setError(" ")
                }, 3000)
                return () => clearTimeout(timer)
            }
        } catch (error) {
            setError("An error occurred while fetching the word.")
        }
    }



    return (
        <>

            <SearchIcon className='search-icon' onClick={handleSubmit} />
            <input className='input' type="text" onChange={(e) => setFindWord(e.target.value)} />
            {!findWord && <h3 style={{ color: 'red' }}>{message}</h3>}
            {error && <h3 className="error-message">{error}</h3>}
            <Word findWord={findWord} />
            <Definition findWord={findWord} />


        </>
    )
}

export default Search;