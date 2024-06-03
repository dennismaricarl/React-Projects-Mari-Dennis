import { useState } from "react";
const Search = () => {

    const [findWord, setFindWord] = useState(null)
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${findWord}`)
        const result = await response.json()
        console.log(result)

        if(result) {
            setFindWord(result[0])
        }else{
            setError(result[0].title)
        }
    };

    return (
        <>
            <h1>Dictionary Search </h1>
            <input type="text" onChange={(e) => setFindWord(e.target.value)} />
            <button onClick={handleSubmit}>SUBMIT</button>


            {findWord && (
                <>
                    <h1>{findWord.word}</h1>
                    <h2>{findWord.phonetic}</h2>


                    {findWord.meanings && (
                        <>
                            <div>
                                <h2>{findWord.meanings[0].partOfSpeech}</h2>
                                <h4>Meaning</h4>
                                <ul>
                                    <li> <p>{findWord.meanings[0].definitions[0].definition}</p></li>
                                    <li><p>{findWord.meanings[0].definitions[1].definition}</p></li>
                                    {/* <li><p>{findWord.meanings[0].definitions[2].definition}</p></li> */}
                                </ul>
                               <h4>Synonyms</h4> <p>{findWord.meanings[0].synonyms[0]}</p>
                            </div>

                            <div>
                                <h2>{findWord.meanings[1].partOfSpeech}</h2>
                                <h4>Meaning</h4>
                                <ul>
                                    <li> <p>{findWord.meanings[1].definitions[0].definition}</p></li>
                                </ul>
                                <p>"{findWord.meanings[0].definitions[0].example}."</p>
                            </div>
                        </>

                    )}
                </>
            )}
        </>
    )
}

export default Search;