const Picture=(props)=>{
    const renderPicture=(data)=>{
        if(data){
            if(data.data[0]){
                    return(
                        <div>
                            <img style={{width:"20vw",height:"20vh"}} src={data.data[0].file_path} alt="post pic"/>
                        </div>
                    )
            }
        }
    }
    return(
        <div>
            {renderPicture(props.data)}
        </div>
    )
}

export default Picture;