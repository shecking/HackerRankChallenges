/*
Create a class NotesStore. The class will manage a collection of notes, each note having a state and a name. Valid states are 'completed', 'active', and 'others' (all other states are invalid.)

Class NotesStore must have the following methods:
  addNote(state, name): adds a note with the given name and state to the collection
    1. If the passed name is empty, throw an Error with the message 'Name cannot be empty'
    2. If the passed name is non-empty BUT the given state is not a valid state, throw an Error with the message 'Invalid state {state}'
  getNotes(state): returns an array of name of notes with given state added so far. The names are returned in the order the notes were added. Also:
    1. If the given state is not valid, throw Error with 'Invalid state {state}'.
    2. If no note is found in this state, return an empty array
*/
let allNotes = []
let gettingNotes = []

class NotesStore {
  constructor(name, state) {
    this.name = name
    this.state = state
  }

  addNote(state, name) {
    if (!name) {
      throw new Error('Name cannot be empty')
    }
    if (state == 'completed' || state == 'active' || state == 'others') {
      allNotes.push([state, name])
    } else {
      throw new Error(`Invalid state ${state}`)
    }
  }

  getNotes(state) {
    if (state == 'completed' || state == 'active' || state == 'others') {
      gettingNotes = []
      for (let i = 0; i < allNotes.length; i ++) {
        if (allNotes[i][0] == (state)) {
          gettingNotes.push(allNotes[i][1])
        }
      }
      return gettingNotes
    } else {
      throw new Error(`Invalid state ${state}`)
    }
  }
}

// let newNote = new NotesStore()
// newNote.addNote('completed', 'Steven')
// newNote.addNote('active', 'Matthew')
// newNote.addNote('others', 'Julia')
// newNote.getNotes('completed')
// console.log(allNotes)
// console.log(gettingNotes)
