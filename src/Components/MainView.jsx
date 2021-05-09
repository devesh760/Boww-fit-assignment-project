import React from 'react';
import View from './View/View'
import './MainView.scss';

function MainView(props){

    let Views_to_show = null;
    if(props.data){
       Views_to_show =  props.data.map((view_data)=>{
            return (
              <View
                showModal={props.showModal}
                key={view_data.id}
                data={view_data}
              />
            );
        })
    }
    return(
        <div className="MainView">
            {Views_to_show}
        </div>
    )
}
export default MainView;