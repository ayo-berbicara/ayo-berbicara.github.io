import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';

import App from './App';

declare global {
  interface Window { 
    SpeechRecognition: any; 
    webkitSpeechRecognition: any;
    SpeechGrammarList: any; 
    webkitSpeechGrammarList: any;
    SpeechRecognitionEvent: any; 
    webkitSpeechRecognitionEvent: any;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
