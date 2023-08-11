import React, { Component } from 'react'

export default class NewsItem extends Component {
     
   
  render() {
    let {title,description,ImgUrl,InfoUrl,author,date,source}= this.props;
        console.log({date})
        const d={date}
        let date2 = (d.date)
        console.log(date2)
        let a = new Date(date2)
        console.log(a)
        let b= a.toGMTString()
        console.log(b)

        
    
    return (
      <>
        <div className="card" style ={{ width : "18rem" }}>
          <img src={ImgUrl} className="card-img-top" alt="..." style={{height : '10rem'}} />
         
          <div className="card-body">
            <h5 className="card-title">{title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"70%"}}>{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">by {author?author:"unknwon"} at {b} </small></p>
            <a href={InfoUrl} rel="noreferrer" target='_blank' className="btn btn-primary">read more</a>
          </div> 
        </div>
      </>
    )
  }
}
