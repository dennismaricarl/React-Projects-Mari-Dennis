import Divider from '@mui/material/Divider';
import { ReactComponent as IconNewWindow } from './images/icon-new-window.svg'


const Definition = ({ findWord }) => {

    return (
        <div className='def-container'>

            {findWord && (
                <>

                    {findWord.meanings && findWord.meanings.slice(0, 2).map((meanings, index) => (
                        <div key={index}>

                            <h3 className='part-of-speech'>{meanings.partOfSpeech} </h3>
                            <Divider className='divider' />


                            <h3> Meaning </h3>

                            {meanings.definitions && meanings.definitions.slice(0, index === 0 ? 3 : 1).map((definition, defIndex) => (

                                <ul key={defIndex}>
                                    <li className='definition'>{definition.definition}</li>
                                </ul>


                            ))}

                            <div style={{ display: 'flex', gap: '20px' }}>
                                {index === 0 && <p>Synonyms</p>}
                                <p>{meanings.synonyms.slice(0, index === 0 ? 1 : 0).map(() => (


                                    <p style={{ display: 'flex', gap: '10px', position: 'relative', bottom: '32px', marginBottom: '-45px' }}>{meanings.synonyms.slice(0, 3).map((syno) => (
                                        <p>{syno}</p>

                                    ))}</p>


                                ))}</p>


                            </div>
                            {index === 1 &&

                                <>
                                    {meanings.definitions[0].example && <p style={{ marginTop: '-30px', marginLeft: '40px' }}>"{meanings.definitions[0].example}" </p>}

                                    <Divider style={{ width: '60%', marginTop: '50px' }} />
                                    <div style={{ display: 'flex', gap: '20px' }}>

                                        <p>Source</p>
                                        <a style={{ marginTop: '15px' }} href={findWord.sourceUrls}>{findWord.sourceUrls}
                                            <IconNewWindow style={{ marginLeft: '10px' }} onClick={() => window.location.href(findWord.sourceUrls)} />
                                        </a>
                                    </div>

                                </>


                            }

                        </div>
                    ))}
                </>

            )}
        </div>
    )
}



export default Definition