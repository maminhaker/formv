import './Head.css'
import React, {useState} from 'react';

import rectangle from '../../image/image-form/Rectangle2.png';


function Head(props) {
  const [changeStatus, setChangeStatus] = useState(false)
  const [status, setStatus] = useState("Прежде чем действовать, надо понять")

  function changeStatusShow(e) {
    setChangeStatus(!changeStatus)
  }

  function statusText(e) {
    setStatus(e.target.value)
  }

  return (
    <div className="head">

      <div className="head__wrapper-top">
        <div className="head__hello">Здравствуйте, <span>Человек №3596941</span></div>
  
        <div className="head__status" onClick={changeStatusShow}>Сменить статус</div>
        
      </div>

      <div className={changeStatus ? "head__input-status" : "none"}>
        <input type="text"  onKeyUp={statusText}/> <button onClick={changeStatusShow}>OK</button>
      </div>
      

      <div className="head__wrapper-bottom">
        <img height="11px" width="11px" className="head__img" src={rectangle} alt="#" />
        <div className="head__status-text"> <p> {status} </p> </div>
      </div>
      
    </div>
  )
}

export default Head