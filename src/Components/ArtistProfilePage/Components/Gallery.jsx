import GalleryView from "./GalleryView";
const Gallery = (props) => {
  return (
    <div>
      <nav className="container d-flex justify-content-center">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-All"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            All
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Pinned"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Pinned
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-mostRated"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Most Rated
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-All"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className=" container d-flex flex-row flex-wrap justify-content-between">
            {props.All ? (
              props.All.map((val, idx) => {
                return <GalleryView Data={val} key={idx} />;
              })
            ) : (
              <h1 className="text-center">No Post Found</h1>
            )}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-Pinned"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className=" container d-flex flex-row flex-wrap justify-content-between">
            {props.Pinned ? (
              props.Pinned.map((val, idx) => {
                return <GalleryView Data={val} key={idx} />;
              })
            ) : (
              <h1 className="col-12 text-center text-danger">
                No Pinned Post Found
              </h1>
            )}
          </div>
        </div>
        {/* <div
          clclass="tab-pane fade"
          id="nav-mostRated"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className=" container d-flex flex-row flex-wrap justify-content-between">
            {props.MostRated ? (
              props.MostRated.map((val, idx) => {
                return <GalleryView Data={val} key={idx} />;
              })
            ) : (
              <h1 className="text-center">No Post Found</h1>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Gallery;
