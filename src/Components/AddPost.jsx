const AddPost=()=>{
    return(
        <div>
            <form action="https://artist-hub-api.herokuapp.com/image/addImage" method="POST">
                <input type="file" name="imageFile"/>
                <button type="submit">submit</button>
                </form>
                <form action="https://artist-hub-api.herokuapp.com/post/addPost" method="POST">
                    <input type="text" name="location"/>
                    <input type="text" name="occassion"/>
                    <input type="text" name="caption"/>
                    <input type="text" name="description"/>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}
export default  AddPost;