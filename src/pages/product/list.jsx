
import React, { useState, useEffect } from "react";
import axios from "axios";


const List = () => {
  const [tag, setTag] = useState("");
  const [DataTours, setDataTours] = useState([]);
  const [fetching, setFetching] = useState(true);


  useEffect(() => {
    setFetching(true);
    fetchToursData();
    tag ? (document.title = tag) : (document.title = ".travelwoVi");
  }, [tag]);

  const fetchToursData = () => {
    axios("https://tour-api-dev.herokuapp.com/Tour")
      .then(({ data }) => {
        if (tag) {
          const filteredTours = data.filter((tour) => tour.tags.includes(tag));
          setDataTours(filteredTours);
          setFetching(false);
        } else {
          setDataTours(data);
          setFetching(false);
        }
      })
      .catch((err) => {
        console.error("Fetching error: " + err);
      });
  };

  return (
  <>
<main className="my-5">
<div className="container">

  <section className="text-center">
    <h4 className="mb-5"><strong>Latest posts</strong></h4>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: '#fbfbfb26'}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: '#fbfbfb26'}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: '#fbfbfb26'}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: '#fbfbfb26'}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/022.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: '#fbfbfb26'}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/035.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: '#fbfbfb26'}}></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Post title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" className="btn btn-primary">Read</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <nav className="my-4" aria-label="...">
    <ul className="pagination pagination-circle justify-content-center">
      <li className="page-item">
        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
      </li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item active" aria-current="page">
        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
      </li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</div>
</main>
  </>
  );
};

export default List;
