import React, { useState, useEffect, useRef } from 'react';

interface AudioPlayerProps {
    audioURL: string | undefined;
}

/*export const AudioPlayer = ({audioURL}: AudioPlayerProps) => {
    return (
        <audio
            controls>
            <source src={audioURL} type="audio/mp3"/>
        </audio>
    )
}*/

export const AudioPlayer = ({audioURL}: AudioPlayerProps)  => {
    const [audioSrc, setAudioSrc] = useState<string | undefined>(audioURL);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current && audioSrc) {
            audioRef.current.load();
            audioRef.current.src=audioSrc;
            audioRef.current.play();
        }
    }, [audioSrc]);

    return (
        <div>
            <audio ref={audioRef} controls>
                <source src={audioURL} type="audio/mp3" />
            </audio>
        </div>
    );
}