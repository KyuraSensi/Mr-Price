
import React from 'react'
import './Shop.css'

function KyusMostRecent() {
    
    let shopProducts = [
        {
         img : 'imgs/home_ladies-wk2912072023.webp',
         button : 'SHOP LADIES'
       },
       {
         img : 'imgs/home_mens-wk2912072023.webp',
         button : 'SHOP MENS'
       },
       {
         img : 'imgs/home_bigkids-wk2912072023.webp',
         button : 'SHOP KIDS 7-14'
       },
       {
         img : 'imgs/home_prekids-wk2912072023.webp',
         button : 'Shop KIDS 1-7'
       },
       {
         img : 'imgs/home_baby-wk2912072023.webp',
         button : 'SHOP BABIES'
       },
       {
         img : 'imgs/home_beauty-wk2912072023.webp',
         button : 'SHOP BEAUTY'
       },
       {
         img : 'imgs/home_novelty-wk2912072023.webp',
         button : 'Shop NOVELTY'
       },
       {
         img : 'imgs/home_sustainability-wk2912072023.webp',
         button : 'FIND OUT MORE'
       }
     ] 

     let extras = [
        {
            img: 'imgs/home-faq-ic.png'
        },
        {
            img: 'imgs/home-delivery-ic.png'
        },
        {
            img: 'imgs/home-track-ic.png'
        },
        {
            img: 'imgs/home-loc-ic.png'
        },
        {
            img: 'imgs/home-hts-ic.png'
        },
     ]

  return (
    <>
     <div className='shopCont'>

      {shopProducts.map((products,index) => (
        <div className='shopProduct' key={index}>
          <img src={products.img} key={index} alt='img' width='100%' height='100%'/>
          <a href='#'><button>{products.button}</button></a>
        </div>
      ))}

     </div>

     <div className='extrasCont'>
        {extras.map((item,index) => (
           <a href='#'> <img src={item.img} key={index} alt='img' width='100%' height='100%' /> </a>
        ))}
     </div>
    
    </>
  )
}

export default KyusMostRecent

