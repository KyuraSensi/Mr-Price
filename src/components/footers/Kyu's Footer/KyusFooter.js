import React from 'react'
import './KyusFooter.css'

const KyusFooter = () => {

  let footer1 = document.querySelector('.footer1')
  let footer2 = document.querySelector('.footer2')

  function remove(){
    footer1.style.display = 'none';
  }

  return (
    <>
    <div className='footer1'>
      <p>We use cookies to ensure you get the best possible experience. By using this site we assume your consent, view our <a href='#'>Privacy Policy </a> for more info.</p>
      <button onClick={remove}>&times;</button>
    </div>
    <div className='footer2'>
      <button>&#9776;</button>
    </div>
    </>
  )
}

export default KyusFooter