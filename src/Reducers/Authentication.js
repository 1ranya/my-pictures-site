const authReducer = (state = false, action) => {
    switch(action.type){
        case "AUTHENTICATE":
            return true;
        default:
            return state;
    }
}
export default authReducer