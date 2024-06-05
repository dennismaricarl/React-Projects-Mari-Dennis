import PlayCircleIcon from '@mui/icons-material/PlayCircle';

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
                        <h1 style={{ fontFamily: 'sans-serif', fontSize: '50px' }}>{findWord.word}</h1>

                        {findWord.phonetics && (
                            <PlayCircleIcon className='play-icon' style={{ fontSize: '60' }} onClick={playAudio} />

                        )}
                        <p className='word-phonetic'>{findWord.phonetic}</p>

                    </div>
                </>


            )}

        </>
    )
}

export default Word;