import Chip from "@mui/material/Chip";

export interface SplitTextProps {
  text: string;
  find: RegExp
}

export default function SplitText({text, find}: SplitTextProps){
  const splitter = [];
  let remaining = text;

  let match;
  while(match = find.exec(remaining)){
    console.log(match);
    const considered = match[0];
    if(match.index > 0) splitter.push(<span>{ remaining.slice(0, match.index) }</span>);
    splitter.push(<Chip color="error" label={ considered } />);
    remaining = remaining.slice(match.index + considered.length);
    find.lastIndex = 0;
  }
  if(remaining.length > 0) splitter.push(<span>{ remaining }</span>)

  return (
    <>
      { splitter }
    </>
  );
}
