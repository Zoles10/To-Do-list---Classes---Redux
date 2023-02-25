export const updateCurrentNote = (text) => ({
    type: "UPDATE",
    payload: text
})

export const addToNoteArray = (text) => ({
    type: "ADD",
    payload: text
})

export const deleteFromNoteArray = (id) =>({
    type: "DELETE",
    payload: id
})

export const editNoteArray = (id,newText) =>({
    type: "EDIT",
    payload: {id: id, newText:newText}

})

export const doneNoteArray = (id) =>({
    type: "DONE",
    payload: id
})

export const showAllNotes = () =>({
    type: "SHOW-ALL"})

export const showFinishedNotes = () =>({
    type: "SHOW-FINISHED"})

export const showUnfinishedNotes = () =>({
    type: "SHOW-UNFINISHED"})

export const togglePercentage = (id) =>({
    type: "TOGGLE-PERCENTAGE",
    payload: id})

export const toggleImportant = (id) =>({
    type: "TOGGLE-IMPORTANT",
    payload: id})

export const toggleEditMode = (id) =>({
    type: "TOGGLE-EDITMODE",
    payload: id})

