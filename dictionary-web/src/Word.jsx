const Word = ({ findWord }) => {

    return (
        <>


            {findWord && (
                <>
                    <h1>{findWord.word}</h1>

                    {findWord.phonetics && (
                        <audio controls source={findWord.phonetics[0].audio}>

                        </audio>
                    )}

                    {findWord.phonetic}

                </>


            )}

        </>
    )
}

export default Word;