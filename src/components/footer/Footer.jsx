import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Il Blog.com</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minus, harum quas eligendi necessitatibus magnam earum. In, voluptatibus. Quos praesentium ipsa laborum error delectus quaerat repellendus nobis corporis sunt! Et!
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Chi Siamo</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contatti</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Dove siamo</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Iscriviti</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 pt-0">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.IlBlog.com"> IlBlog.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;