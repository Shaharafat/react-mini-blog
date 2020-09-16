import React,{useContext} from 'react';

import { ThemeContext } from '../components/ThemeContext.jsx';
import './HashTag.css';

const HashTag = () => {
  const theme = useContext(ThemeContext);
  return ( 
    <div className="hashTag-container" style={{background:theme.foreground, color:theme.font}}>
      <h2 className="hashTag-header" style={{color: theme.font, borderColor:theme.background}} >HashTags</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, reiciendis id! Unde sed odit earum natus sunt consectetur distinctio obcaecati.
    </div>
   );
}
 
export default HashTag;