import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">AIBSG</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.trends.com.ph/" target="_blank" rel="noopener noreferrer">Trends</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
