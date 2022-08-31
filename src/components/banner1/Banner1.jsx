import React from "react";
import './banner1.css'

const Banner1 = () => {
  return (
    <>
<div style={{background: `url("https://bootstrapious.com/i/snippets/sn-static-header/background.jpg")`}} className="jumbotron bg-cover text-white">
    <div className="container py-5 text-center">
        <h1 className="display-4 font-weight-bold">Bootstrap static header</h1>
        <p className="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <p className="font-italic">Snippe by
            <a href="https://bootstrapious.com" className="text-white">
                <u>Bootstrapious</u>
            </a>
        </p>
        <a href="#" role="button" className="btn btn-primary px-5">See All Features</a>
    </div>
</div>


<div className="container py-5">
    <h2 className="h3 font-weight-bold">Some demo content</h2>
    <div className="row">
        <div className="col-lg-10 mb-4">
            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
        </div>
        <div className="col-lg-8">
            <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur <strong className="font-weight-bold text-dark">adipisicing elit, sed </strong>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <strong className="font-weight-bold text-dark">reprehenderit in voluptate </strong>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</div>
</>
  );
};

export default Banner1;