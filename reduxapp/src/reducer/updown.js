//import {increment,decrement} from './action/index';
let intialstate=0;
const changeTheNumber=(state=intialstate,action)=>{
      switch (action.type) {
        case "INCREMENT":
            
            return state+action.plyload;

        case "DECREMENT"  :
            return state-1;  
      
        default:
           return state;
      }
}
export default changeTheNumber;