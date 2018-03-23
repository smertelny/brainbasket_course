export default function genres(state=[], action) {
    switch(action.type){
    case ("GET_GENRES"):
        return action.genres;
    default:
        return state;
    }
      
}
