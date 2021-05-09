import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import ModalView from './Components/ModalView/ModalView'
import MainView from './Components/MainView'
import Backdrop from "./Components/UI/Backdrop/Backdrop";
const API_END_POINT =
  "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";
function App() {
  let [data,changeData] = useState();
  let [showModalView,setModalView] = useState(false);
  let [dataForModal,setDataForModal] = useState(null);
  useEffect(()=>{
    fetch(
      API_END_POINT
    ).then(responce=>{
      return responce.json();
    }).then(data=>{
      console.log(data);
      changeData(data);
    });
  },[])
  const showModal = (id)=>{
      setModalView(true);
      setDataForModal(data[id-1]);
  }
  const hideModal =()=>{
    setModalView(false);
  }
  return (
    <div className="app">
      <MainView data={data} showModal={showModal} />
      {showModalView ? (
        <>
          <ModalView
            hideModal={hideModal}
            imgSrc={dataForModal.thumbnail.small}
            title={dataForModal.title}
            content = {dataForModal.content}
            avatar={dataForModal.author.avatar}
            name={dataForModal.author.name + ' - '+ dataForModal.author.role}
          />
          <Backdrop hideModal={hideModal} />
        </>
      ) : null}
    </div>
  );
}

export default App;
