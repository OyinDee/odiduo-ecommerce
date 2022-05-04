const changename=(newusername)=>{
    return{
        type: 'CHANGE',
        payload: newusername
    }
}
const changeamount=(newamount)=>{
    return{
        type: 'CHANGEA',
        payload: newamount
    }
}

export {changename,changeamount}