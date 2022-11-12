import { Container } from "@mui/material";
import React from "react";
import { Divider } from "antd";
import './blog.css';
const Blog = () => {
  return (
    <>
  

<Container>
<div className="blog">
    <Divider plain style={{borderColor:'#f97150'}}> <p className="introduction">CẨM NANG DU LỊCH</p></Divider> </div>
<main className="my-5">
  <div className="container">

    <section className="border-bottom pb-4 mb-5">
      <div className="row gx-5">
        <div className="col-md-6 mb-4">
          <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/slides/080.jpg" className="img-fluid" />
            <a href="#!">
              <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
            </a>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">Tin mới trong ngày</span>
          <h4><strong>Tên</strong></h4>
          <p className="text-muted">
            Mô tả.....................
            .......................
            ....................................................
            .....................................................
          </p>
          <button type="button" className="button_n1">Read more <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  
    <section>
      <div className="row gx-lg-5">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        
          <div>
           
            <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/fluid/city/113.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
            </div>

           
            <div className="row mb-3">
              <div className="col-6">
                <a href="" className="text-info">
                  <i className="fas fa-plane"></i>
                  Travels
                </a>
              </div>

              <div className="col-6 text-end">
                <u> 15.07.2020</u>
              </div>
            </div>

            
            <a href="" className="text-dark">
              <h5>This is title of the news</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                adipisci iusto nam temporibus modi animi laboriosam?
              </p>
            </a>

            <hr />

      
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

        
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

           
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

    
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>
          </div>
      
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
       
          <div>
         
            <div className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/fluid/city/011.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
            </div>

          
            <div className="row mb-3">
              <div className="col-6">
                <a href="" className="text-danger">
                  <i className="fas fa-chart-pie"></i>
                  Business
                </a>
              </div>

              <div className="col-6 text-end">
                <u> 15.07.2020</u>
              </div>
            </div>

      
            <a href="" className="text-dark">
              <h5>This is title of the news</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                adipisci iusto nam temporibus modi animi laboriosam?
              </p>
            </a>

            <hr />

    
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

         
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

      
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

  
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/034.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>
          </div>
   
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
       
          <div>
        
            <div className="bg-image hover-overlay shadow-1-strong rounded-5 ripple mb-4" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/fluid/city/018.jpg" className="img-fluid" />
              <a href="#!">
                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
              </a>
            </div>

         
            <div className="row mb-3">
              <div className="col-6">
                <a href="" className="text-warning">
                  <i className="fas fa-code"></i>
                  Technology
                </a>
              </div>

              <div className="col-6 text-end">
                <u> 15.07.2020</u>
              </div>
            </div>

       
            <a href="" className="text-dark">
              <h5>This is title of the news</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
                id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
                adipisci iusto nam temporibus modi animi laboriosam?
              </p>
            </a>

            <hr />

       
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/011.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

         
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/012.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

     
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/013.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>

      
            <a href="" className="text-dark">
              <div className="row mb-4 border-bottom pb-2">
                <div className="col-3">
                  <img src="https://mdbootstrap.com/img/new/standard/city/014.jpg"
                       className="img-fluid shadow-1-strong rounded" alt="" />
                </div>

                <div className="col-9">
                  <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
                  <p>
                    <u> 15.07.2020</u>
                  </p>
                </div>
              </div>
            </a>
          </div>
       
        </div>
      </div>
    </section>
  
    {/* <nav className="my-4" aria-label="...">
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
    </nav> */}
  </div>
</main>

</Container>

    </>
    
  );
};

export default Blog;
