import React from 'react'
import './KyusContactUs.css'

const KyusContactUs = () => {
  return (
    <>
     <div className='contacCont'>
      <h3>Hook me Up with fashion news</h3>
      <div>
        <input type='checkbox'/>
        <p>All</p>
      </div>

      <div>
        <input type='checkbox'/>
        <p>Ladies</p>
      </div>
     
      <div>
        <input type='checkbox'/>
        <p>Mens</p>
      </div>

      <div>
        <input type='checkbox'/>
        <p>Kids</p>
      </div>

      <div>
        <input type='checkbox'/>
        <p>Baby</p>
      </div>

      <br/>
      <input type='text' placeholder='Email Address'/>
     </div>
    </>
  )
}

export default KyusContactUs