import React, { useState } from 'react';
import './View.scss'
function View(props){
   let date =  new Date(props.data.date);
    return (
      <div className="view">
        <div className="img-container">
          <p onClick={()=>props.showModal(props.data.id)}> Learn More</p>
          <img  src={props.data.thumbnail.small} alt="" />
        </div>
        <section>
          <div className="circles">
            <div></div>
            <div></div>
          </div>
          <h4 onClick={()=>props.showModal(props.data.id)}>{props.data.title}</h4>
          <p>
              {props.data.content}
          </p>
          <div className='name-data'>
                <p>{props.data.author.name+ ' - ' + props.data.author.role}</p>
                <p>{date.toLocaleString('default', { month: 'short' })+ ' '+ date.getDate() + ',' + date.getFullYear()}</p>
          </div>
        </section>
      </div>
    );
}
export default View;