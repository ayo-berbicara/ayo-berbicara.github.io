import { useState } from 'react';

function useRecognition(){
    const [recognizing, setStatus] = useState(true);

    function start(){
        setStatus(true);
    }

    function stop(){
        setStatus(false);
    }

    console.log([14, recognizing]);

    return {recognizing, start, stop};
}

function createRecognition({onresult = (ev)=>{}, onspeechend = (ev)=>{}}){
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.lang = 'id-ID';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    function start(){
        recognition.start();
    }

    function stop(){
        recognition.stop();
    }

    console.log({recognition});

    recognition.onresult = (...ev) => {
        console.log(ev);
        onresult(ev);
    }

    recognition.onspeechend = (...ev) => {
        console.log(ev);
        onspeechend(ev);
    }

    recognition.onerror = (...ev) => {
        console.log(ev);
    }

    return { recognition, start, stop };
}

export { createRecognition, useRecognition };
