import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,CJumbotron
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Dashboard = () => {
  return (
    <>
<CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              EXAMPLE DASHBOARD
              {/* <DocsLink name="CJumbotron"/> */}
            </CCardHeader>
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron - style component for calling extra
                  attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <CButton color="primary" size="lg">Learn More</CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </>
  )
}

export default Dashboard
