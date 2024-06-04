const Definition = ({ findWord }) => {

    return (
        <>

            {findWord && (
                <>

                    {findWord.meanings && findWord.meanings.slice(0, 2).map((meanings, index) => (
                        <div key={index}>
                            <h3>{meanings.partOfSpeech}</h3>
                            <h4>Meaning</h4>

                            {meanings.definitions && meanings.definitions.slice(0, index === 0 ? 3 : 1).map((definition, defIndex) => (

                                <ul key={defIndex}>
                                    <li>{definition.definition}</li>
                                </ul>


                            ))}

                            {index === 0 && <p>Synonyms</p>}
                            <p>{meanings.synonyms.slice(0, index === 0 ? 1 : 0)}</p>
                            {index === 1 &&
                                <>
                                    {meanings.definitions[0].example && <p>"{meanings.definitions[0].example}" </p>}
                                    <p>Source</p>
                                    <a href={findWord.sourceUrls}>{findWord.sourceUrls}</a>

                                </>

                            }

                        </div>
                    ))}
                </>

            )}
        </>
    )
}



export default Definition