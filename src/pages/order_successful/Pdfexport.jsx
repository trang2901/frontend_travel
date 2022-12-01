import React from "react";

import {Divider} from "antd";
import { Container } from "@mui/material";
import logo from "../../image/DORIS_TOURS.png"
const Pdfexport = () => {

  return (
    // <PDFExport ref={PDFExportComponent} paperSize="A1">\
            <Container>
              <div className="container bootstrap snippets bootdey">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 text-left">
                        <h4>
                          Thong tin<strong> Khach Hang</strong>
                        </h4>
                        <ul className="list-unstyled">
                          <li>
                            <strong>Ten: </strong>
                           
                          </li>

                          <li>
                            <strong>Dia chi:</strong>
                           
                          </li>
                          <li>
                            <strong>Email: </strong>
                            
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-6 col-sm-6 text-right">
                        <h4>
                          <strong>Payment</strong> Details
                        </h4>
                        <ul className="list-unstyled">
                          <li>
                            <strong>Bank Name:</strong> 012345678901
                          </li>
                          <li>
                            <strong>Account Number:</strong> 012345678901
                          </li>
                          <li>
                            <strong>SWIFT Code:</strong> SWITCH012345678CODE
                          </li>
                          <li>
                            <strong>V.A.T Reg #:</strong> VAT5678901CODE
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-condensed nomargin">
                        <thead>
                          <tr>
                            <th>Ten tour</th>
                            <th>So luong tham gia</th>
                            <th>Gia tour</th>
                            <th>VAT</th>
                            <th>Tong</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <strong></strong>
                              </div>
                              <small>Khoi hanh:{""} </small>
                              <br />
                              <small>
                                Noi khoi hanh:{""}
                              </small>
                            </td>
                            <td>2</td>
                            <td>;;;;;;;;;;;;;;;;</td>
                            <td>10%</td>
                            <td>
                              kkkkk
                            </td>
                          </tr>
                          {/* <tr>
          <td>
            <div><strong>Side panel with TAC 2.0 ventilation</strong></div>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </td>
          <td>2</td>
          <td>$67.00</td>
          <td>$1.80</td>
          <td>$68.80</td>
        </tr> */}
                          {/* <tr>
          <td>
            <div><strong>Mesh front panel design to improve air</strong></div>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
          </td>
          <td>3</td>
          <td>$335.00</td>
          <td>$100.20</td>
          <td>$435.20</td>
        </tr> */}
                        </tbody>
                      </table>
                    </div>

                    <hr className="nomargin-top" />
                    <div className="row">
                      <div className="col-sm-6 text-left">
                        <h4>
                          Thong tin <strong>Lien he</strong>
                        </h4>
                        <p className="nomargin nopadding">
                          <strong>Luu y: </strong>
                          Quy khach co mat tai noi khoi hanh truoc 30 phut.
                        </p>
                        <br />

                        <address>
                          PO Box 21132 <br />
                          Vivas 2355 Australia
                          <br />
                          Phone: 1-800-565-2390 <br />
                          Fax: 1-800-565-2390 <br />
                          Email:support@yourname.com
                        </address>
                      </div>

                      <div className="col-sm-6 text-right">
                        <ul className="list-unstyled">
                          <li>
                            <strong>Sub - Total Amount:</strong> $2162.00
                          </li>
                          <li>
                            <strong>Discount:</strong> 10.0%
                          </li>
                          <li>
                            <strong>VAT ($6):</strong> $12.0
                          </li>
                          <li>
                            <strong>Grand Total:</strong> $1958.0
                          </li>
                        </ul>
                        <a className="btn btn-default" href="#">
                          MAKE A PAYMENT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default text-right">
                  <div className="panel-body">
                    <button>
                      <a
                        className="btn btn-success"
                        target="_blank"
                    
                      >
                        <i className="fa fa-print"></i> PRINT INVOICE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Container>
			
        //   </PDFExport>
  );
};

export default Pdfexport;
