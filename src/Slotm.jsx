import React from "react";

const Slotm=(props)=>{
    //  let x= props.x;
    //  let y= props.y;
    //  let z= props.z;

     //object destructuring
     let{x,y,z}=props;
     if((x===y) &&(y===z)){
        return(<>
            <div>
                <div>
                    <h1>{x} {y} {z} <span>This is Matching</span></h1>

                </div>
                <hr/>
            </div>
        </>)
     }else{
        return(<>
            <div>
                <div>
                    <h1>{x} {y} {z} <span>This is not  Matching</span></h1>

                </div>
                <hr/>
            </div>
        </>)
     }
     

}

export default Slotm;