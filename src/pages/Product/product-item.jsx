import React from 'react'

export const Product_item = (props) => {
    const { id, productName, productImage, price } = props.data;
  return (
    <>
        <img className="myproduct_img" src={productImage} alt="" />   
        <div className='myproduct_info'>
            <h1 style={{fontSize:"5vw",color:"#311616",fontWeight: "bold"}}>{productName}</h1>
            <h2 style={{marginTop: "1vw",fontSize : "3.7vw",color :"#909A1C",fontWeight: "bold"}}>{price} VND</h2>
            <p style={{textAlign : "start", marginTop:"1vw", fontSize : "1.8vw", fontStyle :"italic"}}>Desciption: Brown Sugar, Tomato Puree (Water, Tomato Paste), Distilled Vinegar, Molasses, Corn Starch, Salt, Spices, Dried Onion, Garlic Powder.</p>
        </div>
    </>
  )
}
