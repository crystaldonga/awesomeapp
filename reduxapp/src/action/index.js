export const increment=(val)=>{
    return{
        type:"INCREMENT",
        plyload:val
    }
}

export const decrement=()=>{
    return{
        type:"DECREMENT"
    }
}
