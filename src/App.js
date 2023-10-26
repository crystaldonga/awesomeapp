
import React from 'react';

function App(){
  let currtime=new Date();
currtime = currtime.getHours();
let greeting="";
const cssstyle={ };
if(currtime>=1 && currtime<=11){
    greeting="Good Morning";
    cssstyle.color = "green";
}else if(currtime>=12 && currtime<20){
    greeting="Good Afternoon";
    cssstyle.color = "Orange";
}else{
    greeting="Good night"
    cssstyle.color = "Black";
}

return (<>
  <div>
  <h1>Hello Sir,<spam style={cssstyle}>{greeting}</spam></h1>
  </div>
</>);
}

export default App;
