const TopContainer=(props)=>{
    return(
        <div className="d-flex flex-row">
            <h5 className="mr-2">{props.Top.location}</h5>
            <h5>{props.Top.occassion}</h5>
        </div>
    )
}
export default TopContainer;