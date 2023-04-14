export const initialState={
    term:null
}
export const actionTypes={
    SET_SEARCh_TERM:"SET_SEARCh_TERM",
}
const reducer=(state, action)=>{
    switch(action.type){
        case "SET_SEARCh_TERM" :
            return{
                ...state,
                term:action.term
            };
            default :
            return state
    }
}
export default reducer;