import React from 'react';

const Backdrop = ({hideModal})=>(
    <div onClick={hideModal} style={{
        position:'fixed',
        top:'0',
        left:'0',
        height:'100%',
        width:'100%',
        zIndex:'100',
        backgroundColor:'rgba(0,0,0,0.6)'
    }}></div>
); 

export default Backdrop;