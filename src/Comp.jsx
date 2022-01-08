import React from 'react'

export default function Comp({heading,text,image}) {
    return (
        <div className="container comp">
          <div className="row mt-3">
              <div className="col-md-4 mt-5">
                  <h3 className="heading">{heading}</h3>
                  <p className="mt-4 heading">{text}</p>
              </div>
              <div className="col-md-8">
                  <img src={image} alt="" className="mt-5" />
              </div>
             
        </div>  
        </div>





    )
}
