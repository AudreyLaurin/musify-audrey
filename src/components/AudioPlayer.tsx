interface AudioPlayerProps {
    audioURL: string | undefined;
}

export const AudioPlayer = ({audioURL}: AudioPlayerProps) => {
    return (
        <audio
            controls>
            <source src={audioURL} type="audio/mp3"/>
        </audio>
    )
}
