const GalleryView = (props) => {
  return (
    <div className="mt-4 me-4 ">
      <img
        style={{ width: "20vw", height: "35vh" }}
        src={props.Data.all_files.files[0]}
        alt="gallery"
      />
    </div>
  );
};
export default GalleryView;
