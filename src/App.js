import './app.css'
import React, {useState} from 'react';

import SelectOption from './components/SelectOption/SelectOption';
import InputItem from './components/InputItem/InputItem';

import Head from './components/Head/Head';

function App() {

  const [selectItems, setSelectItems] = useState(false)

  function showSelectItems() {
    setSelectItems(!selectItems)
  }


  return (
    <div className="App">
      <div className="wrapper-main">

        <Head/>

        <form className="form">

          <div className="form__input-wrapper">
            <div className="form__name">Ваш город</div>
              <div onClick={showSelectItems} className="city-list">

                <SelectOption 
                  show={selectItems}
                />

              </div>
          </div>

          <div className="line"></div>

          <InputItem 
            name="Пароль" 
            inputType="password" 
            description="Ваш новый пароль должен содержать не менее 5 символов." 
          />

          <InputItem 
            name="Пароль еще раз" 
            inputType="password" 
            description="Повторите пароль, пожалуйста, это обезопасить вас с нами на случай ошибки." 
          />

          <div className="line"></div>
          
          <InputItem 
            name="Электронная почта" 
            inputType="text" 
            description="Можно изменить адрес, указанный при регистрации." 
          />

          <div className="form__input-wrapper">
            <div className="form__name">Я согласен</div>
            <input className="chekbox" type="checkbox" /> <span className="checkbox-name">принимать актуальную информацию на емейл</span>
          </div>

          <div className="form__button-wrapper">
              <input className="form__button" type="submit" value="Изменить" /> <span className="form__button-description">последние изменения 15 мая 2012 в 14:55:17</span>
          </div>

        </form>

      </div>
    </div>
  );
}

export default App;
