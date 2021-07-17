export default props => {
    if(props.valido){
        return props.children
    }else{
        return false
    }
}