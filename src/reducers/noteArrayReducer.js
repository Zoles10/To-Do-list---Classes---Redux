import {nanoid} from 'nanoid'

const initState = []

const noteArray = (state = initState,action) =>{
    switch(action.type){
        case "ADD":
            if(action.payload){
                return [...state,{id: nanoid(), text: action.payload, done: false, show: true}]
            }
            else{
                return [...state]
            }
        case "DELETE":
            return state.filter(note => note.id !== action.payload);
        case "EDIT":
            return state.map(note => note.id === action.payload.id ?{...note, text: action.payload.newText} : {...note})
        case "DONE":
            return state.map(note => note.id === action.payload ?{...note, done: true} : {...note})
        case "SHOW-ALL":
            return state.map(note => note.show === false ?{...note, show: true} : {...note})
        case "SHOW-FINISHED":
            return state.map(note => note.done ?{...note, show: true} : {...note, show: false})
        case "SHOW-UNFINISHED":
                return state.map(note => !note.done ?{...note, show: true} : {...note, show: false})
        default: 
            return [...state]
    }
}

export default noteArray