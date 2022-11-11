import '@styles/App.css';
import '@styles/scrollbar.css';

import { Stack, Typography, 
  CardContent, ToggleButton} from '@mui/material';
import GlassCard from './components/GlassCard';
import GlassCardContent from './components/GlassCardContent';
import { MicRounded, CopyrightRounded } from '@mui/icons-material';
import SplitText from '@components/SplitText';

import { alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { useState, useMemo, useEffect } from 'react';
import { createSpeechRecognition, map, regex } from '@utils/recognition';

function App(){
  const [trans, setTrans] = useState(false);
  const [text, setText] = useState("");
  const recognition = useMemo(createSpeechRecognition, []);

  recognition.onstart = (ev: any) => setTrans(true);
  recognition.onend = (ev: any) => setTrans(false);

  let matches = text.match(regex);

  recognition.onresult = (ev: any) => {
    const {resultIndex, results} = ev;
    const res = results[resultIndex];
    const trans = res[0];
    const text = trans.transcript;

    console.log({l:31, ev, resultIndex, results, trans, text});

    setText(text);
  };

  recognition.onerror = (ev: any) => {
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
          <div style={{ width: '100%' }}>
            <Typography sx={{ width: 1 }}>
              <SplitText text={text} find={regex} />
            </Typography>
          </div>
          <div style={{
            marginTop: '0.5rem',
            width: '100%', 
            height: '6rem', 
            overflowY: 'auto', 
            overflowX: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap:'0px'
          }}>
            { matches?.map((tidak_baku: string) => {
              return (<>
                <Typography color={red['100']}>{ tidak_baku.toLowerCase() }</Typography>
                <Typography>{ map[tidak_baku.toLowerCase()] }</Typography>
              </>)
            }) }
          </div>
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
      <Typography color="white" sx={{mt: '0.5rem'}}>© 2022 Kitten Development</Typography>
    </Stack>
  );
}

export default App;
