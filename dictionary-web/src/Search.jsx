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
                setError(<div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    <span style={{ marginLeft: '23%', fontWeight: 'bold' }}>{result.title}</span>
                    <p style={{
                        fontSize: '15px', fontWeight: 'lighter', textAlign: 'center', marginRight: '35%'
                    }}>{result.message}<br /> You can try the search again later or head to the web instead.</p>
                </div>)
                setEmoji('😔')

                const timer = setTimeout(() => {
                    setError(" ")
                    setMessage(" ")
                    setEmoji(" ")
                }, 5000)
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


            <Word findWord={findWord} />
            <Definition findWord={findWord} />
            {!findWord && <p style={{ color: 'red' }}>{message}</p>}

            {error && (
                <div style={{ marginTop: '50px' }}>
                    <span style={{ marginLeft: '28%', fontSize: '50px' }}>{emoji}</span>
                    <h3 >{error}</h3>
                </div>
            )}



        </>
    )
}

export default Search;