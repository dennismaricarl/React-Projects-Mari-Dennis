import { useState} from "react";
const Search = () => {

    const [findWord, setFindWord] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${findWord}`)
        const result = await response.json()
       
        if(result){
            setFindWord(result[0])
        }
    };

    return (
        <>
            <h1>Dictionary Search </h1>
            <input type="text"  onChange={(e) => setFindWord(e.target.value)} />
            <button onClick={handleSubmit}>SUBMIT</button>


        {findWord && (
            <>
            <h1>{findWord.word}</h1>
            {findWord.meanings && (

                <div>
                    <p>{findWord.meanings[0].definitions[0].definition}</p>
                </div>
            ) }
            </>
        )}
        </>
    )
}

export default Search;