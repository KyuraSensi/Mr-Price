import React from 'react'
import './KyusTeamMembers.css'

const KyusAboutUs = () => {

  let Obj = [
    {
      img: 'imgs/01_1190910005_SI_00.webp',
      title: 'High Rise Leggings',
      subtitle: 'Everyday Basics',
      price: 'R119.99',
    },
    {
      img: 'imgs/01_1191610017_SI_00.webp',
      title: 'Regular Top',
      subtitle: 'Everyday Basics',
      price: 'R69.99',
    },
    {
      img: 'imgs/01_1190910001_SI_00.webp',
      title: 'Regular Rise Leggings',
      subtitle: 'Everyday Basics',
      price: 'R119.99',
    },
    {
      img: 'imgs/01_1190910006_SI_00.webp',
      title: 'Regular Rise Leggings',
      subtitle: 'Everyday Basics',
      price: 'R119.99',
    },
    {
      img: 'imgs/01_1190910002_SI_00.webp',
      title: 'Regular Rise Leggings',
      subtitle: 'Everyday Basics',
      price: 'R119.99',
    },
    {
      img: 'imgs/01_1191610016_SI_00.webp',
      title: 'Regular Top',
      subtitle: 'Everyday Basics',
      price: 'R69.99',
    }
  ]

  return (
    <>
      
      <h2 id='heading'>There's nothing basic about these...</h2>

      <div className='ProductsCont'>
        
        {Obj.map((item, index) => (
          <div className='ProductsItem'>
            <img src={item.img} alt='img' width='100%' height='100%'/>
          <div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <b>{item.price}</b>
          </div>
          </div>
        ))}
       
      </div>
    </>
  )
}

export default KyusAboutUs