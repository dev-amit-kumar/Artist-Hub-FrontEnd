const GalleryView = (props) => {
  return (
    <div className="mt-4 ">
      <img
        style={{ width: "25vw", height: "30vh" }}
        src={props.Data.all_files.files[0]}
        alt="gallery"
      />
    </div>
  );
};
export default GalleryView;
