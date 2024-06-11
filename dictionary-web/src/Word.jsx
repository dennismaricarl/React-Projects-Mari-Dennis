import { ReactComponent as IconPlay } from './images/icon-play.svg';


const Word = ({ findWord }) => {

    const playAudio = () => {
        if (findWord.phonetics) {
            const phoneticWithAudio = findWord.phonetics.find(phonetic => phonetic.audio)
            if (phoneticWithAudio) {
                let audio = new Audio(phoneticWithAudio.audio)
                audio.play()
            }
        } else {
            console.error("Audio file not found.")
        }
    }
    return (
        <>


            {findWord && (
                <>
                    <div style={{ display: 'flex' }}>
                        <h1 style={{ fontSize: '50px'}}>{findWord.word}</h1>

                        {findWord.phonetics && (
                            <IconPlay className='play-icon' onClick={playAudio} />

                        )}
                        <p className='word-phonetic'>{findWord.phonetic}</p>
               
                    </div>
                </>


            )}

        </>
    )
}

export default Word;