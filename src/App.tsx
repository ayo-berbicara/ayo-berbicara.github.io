import '@styles/App.css';
import '@styles/scrollbar.css';

import { Stack, Typography, 
  CardContent, ToggleButton} from '@mui/material';
import GlassCard from './components/GlassCard';
import GlassCardContent from './components/GlassCardContent';
import { MicRounded } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import { useState, useMemo, useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

function createSpeechRecognition(){
  const srec = new SpeechRecognition();
  const srecList = new SpeechGrammarList();

  // const words = [ 'analisis', 'analisa', 'asa', 'azas', 'antre', 'antri', 'asyik', 'asik', 'atlet', 'atlit', 
  //                 'atmosfer', 'atmosfir', 'autentik', 'otentik', 'balsam', 'balsem', 'bus', 'bis', 'baterai', 'batre' ];
  // const grammar = `#JSGF V1.0; grammar colors; public <color> = ${words.join(' | ')};`
  // srecList.addFromString(grammar, 1);

  // srec.grammars = srecList;
  srec.continuous = true;
  srec.lang = 'id-ID';
  srec.interimResults = true;
  srec.maxAlternatives = 1;

  return srec;
}

function App(){
  const [trans, setTrans] = useState(false);
  const [text, setText] = useState("");
  const recognition = useMemo(createSpeechRecognition, []);

  recognition.onstart = (ev) => setTrans(true);
  recognition.onend = (ev) => setTrans(false);

  recognition.onresult = (ev) => {
    const {resultIndex, results} = ev;
    const res = results[resultIndex];
    const trans = res[0];

    console.log({l:31, ev, resultIndex, results});

    setText(trans.transcript);

    // if(res.isFinal) setText((before) => {
    //   return `${ before } ${ trans.transcript }`
    // });
  };

  recognition.onerror = (ev) => {
    console.log([48, ev])
  }

  async function runTranscribe(){
    if(trans === false){
      recognition.start();
    }else{
      recognition.stop();
    }
  }

  return (
    <Stack alignItems='center' justifyContent='center' sx={{height: '100%'}}>
      <GlassCard sx={{
        width: '24rem', 
        maxWidth: 'calc(100% - 2rem)'
      }}>
        <GlassCardContent>
          <Typography sx={{mb: 1}}>Transkrip</Typography>
          <Typography sx={{ width: 1, height: '6rem', overflowY: 'auto', overflowX: 'hidden' }}>
            {text}
          </Typography>
        </GlassCardContent>
        <CardContent sx={{background: 'white', color: `${alpha('#000', 0.82)}`}}>
          <Stack direction='row' alignItems='center' justifyContent='center'>
            <ToggleButton value='mic' size='large' color='primary' 
              sx={{ borderRadius: '50%' }}
              selected={trans} onChange={runTranscribe}
            >
              <MicRounded sx={{fontSize: '2rem'}} />
            </ToggleButton>
          </Stack>
        </CardContent>
      </GlassCard>
    </Stack>
  );
}

export default App;
