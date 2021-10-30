import { Row, Container, Col } from 'react-bootstrap'
import PropTypes from "prop-types"
import React from "react"

import "./footer.scss"
import ContactForm from '../contact-form/contact-form'

const Footer = ({ siteTitle }) => (
  
  <footer>
      <div className="waves-divider">
      </div>
      <div className="waves-footer">
      <Container>
        <Row>
          <Col lg="6" id="hireme">
            <ContactForm></ContactForm>
          </Col>
        </Row>
      </Container>
      </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
