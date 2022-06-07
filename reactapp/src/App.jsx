import React from "react";
import './index.css';

function App(){
    let curDate = new Date(2022,6,8,2);
curDate = curDate.getHours();
let greet = '';
let cssStyle = {};

if(curDate >= 1 && curDate < 12){
    greet = 'Good Morning';
    cssStyle.color='green'
}else if(curDate >= 12 && curDate < 19){
    greet = 'Good Afternoon';
    cssStyle.color='orange'
}else{
    greet= 'Good Night';
    cssStyle.color='black'
}

return (
    <>
      <div className='div'><h1 className='h1'>Hello Sir, <span className='span' style={cssStyle}>{greet}</span></h1></div>
    </>
)
}

export default App;