import React, { useState, useRef } from "react";
import { PlayIcon } from '@heroicons/react/24/outline';
const Hero = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };
    return (
        <>
            <div className="flex justify-end w-full z-10  md:pr-20 max-sm:mt-20">
                <aside className="sm:w-[300px] w-full h-max cursor-pointer relative inline-block bg-black opacity-1 m-3">
                    <div className={`hover:opacity-100 ${playing ? 'opacity-100' : '  opacity-90  '}`}>
                        <PlayIcon onClick={handlePlayPause}
                            name="play"
                            size="small"
                            className={`absolute w-24 h-24 top-5 left-5 opacity-85 z-10 text-indigo-200 ${playing ? 'hidden' : ''
                                }`}
                        />
                        <video ref={videoRef} onClick={handlePlayPause}
                            className={`object-cover`}>
                            <source src="https://cy92216.tw1.ru/wp-content/uploads/2024/07/pozdravlenie-2024.mp4" type="video/mp4" />
                        </video>
                    </div>
                </aside>
            </div>
            <video autoPlay={true} loop muted playsInline className="object-cover absolute inset-0 size-full">
                <source src="https://cy92216.tw1.ru/wp-content/uploads/2024/09/dlya-sajta.mp4" type="video/mp4" />
            </video>
            <div className="mix-blend-multiply bg-blue-950 opacity-60 object-cover absolute inset-0 size-full"></div>

        </>

    );
}

export default Hero;