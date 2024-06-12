import { useState } from "react";
import Definition from "./Definition";
import Word from "./Word";
import { ReactComponent as SearchIcon } from './images/icon-search.svg';


const Search = () => {

    const [findWord, setFindWord] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("")
    const [emoji, setEmoji] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!findWord) {
            setMessage('Whoops, can\'t be empty...');
            return
        }

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${findWord}`)
            const result = await response.json()
            console.log(result)

            if (response.ok) {
                setFindWord(result[0])
            } else {
                setError(`${result.title} \n ${result.message}`)
                setEmoji('😔')

                const timer = setTimeout(() => {
                    setError(" ")
                    setMessage(" ")
                    setEmoji(" ")
                }, 4000)
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
            {!findWord && <p style={{ color: 'red' }}>{message}</p>}

            {error && (
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '80px' }}>
                    <span style={{ marginLeft: '28%', fontSize: '50px' }}>{emoji}</span>
                    <h3 style={{ marginLeft: '22%' }}>{message}</h3>
                    <p style={{ marginLeft: '12%' }}>{error}</p>
                </div>
            )}



            <Word findWord={findWord} />
            <Definition findWord={findWord} />


        </>
    )
}

export default Search;