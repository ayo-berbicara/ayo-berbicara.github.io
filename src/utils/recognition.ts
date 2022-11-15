export interface MapProps{
    [key: string]: string;
}
export const map: MapProps = {
    "analisa": "analisis",
    "azas": "asa",
    "antri": "antre",
    "asik": "asyik",
    "atlit": "atlet",

    "atmosfir": "atmosfer",
    "otentik": "autentik",
    "balsem": "balsam",
    "bis": "bus",
    "batre": "baterai",
    
    "berfikir": "berpikir",
    "cabe": "cabai",
    "cidera": "cedera",
    "faham": "paham",
    "palid": "valid",

    "bener": "benar",
    "inpograpis": "infografis",
    "paksin": "vaksin",
    "potokopi": "fotokopi",
    "goa": "gua",

    "greget": "gereget",
    "giji": "gizi",
    "gubug": "gubuk",
    "hapal": "hafal",
    "idial": "ideal",

    "ijasah": "ijazah",
    "ihlas": "ikhlas",
    "ijin": "izin",
    "alfa": "alpa",
    "jaman": "zaman",

    "jerafah": "jerapah",
    "jagad": "jagat",
    "jemaah": "jamaah",

    cicak: 'cecak',
    duren: 'durian',
    ganjel: 'ganjal',
    gatel: 'gatal',
    karna: 'karena',

    kebon: 'kebun',
    rame: 'ramai',
    rubuh: 'roboh',
    asep: 'asap',
    grobak: 'gerobak',

    angus: 'hangus',
    hisap: 'isap',
    mahnet: 'magnet',
    mangkok: 'mangkuk',
    nomer: 'nomor',

    resiko: 'risiko',
    saos: 'saus',
    beresih: 'bersih',
    keristen: 'kristen',
    azaz: 'asas',

    asem: 'asam',
    sodara: 'saudara',
    udah: 'sudah',
    praktek: 'praktik',
    rubah: 'ubah',
    
    sekedar: 'sekadar',
    ketapel: 'katapel'
}

export const list = Object.keys(map);

export const regex = new RegExp(`(${ list.join('|') })`, 'ig');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

export const createSpeechRecognition = function (){
  const srec = new SpeechRecognition();
  const srecList = new SpeechGrammarList();

  // const words = [ 'analisis', 'analisa', 'asa', 'azas', 'antre', 'antri', 'asyik', 'asik', 'atlet', 'atlit', 
  //                 'atmosfer', 'atmosfir', 'autentik', 'otentik', 'balsam', 'balsem', 'bus', 'bis', 'baterai', 'batre' ];
  const words = list;
  const grammar = `#JSGF V1.0; grammar baku; public <baku> = ${words.join(' | ')};`
  srecList.addFromString(grammar, 1);

  srec.grammars = srecList;
  srec.continuous = true;
  srec.lang = 'id-ID';
  srec.interimResults = true;
  srec.maxAlternatives = 1;

  return srec;
}
