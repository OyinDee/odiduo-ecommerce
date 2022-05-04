const initState = {
    name: '',
    amount:0
}

const forusername=(state=initState,action)=>{
    if(action.type=='CHANGE'){
        return{
            ...state,
            name: action.payload,
        }
    }
else if(action.type=='CHANGEA'){
    return{
        ...state,
        amount: action.payload
    }
    }

    else{
        return state;
    }
}

export default forusername;