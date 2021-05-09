import React from 'react';

import './ModalView.scss'
function ModalView({hideModal,imgSrc,title,avatar,name,content}){
    return (
        <div className="ModalView">
            <p onClick={hideModal}></p>
            <div className="img-container">
                <img src={imgSrc} alt="" />
            </div>
            <section>
                <h3>
                    {title}
                </h3>
                <p>{content}</p>
                <div className='img-name'>
                    <img src={avatar} alt="" />
                    <p>{name}</p>
                </div>
            </section>
        </div>
    )
}

export default ModalView;