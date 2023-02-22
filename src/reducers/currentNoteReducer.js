const initState = {
    text: ""
}

const currentNote = (state = initState,action) =>{
    switch(action.type){
        case "UPDATE":
            return {text: action.payload}
        default: 
            return state 
    }
}

export default currentNote