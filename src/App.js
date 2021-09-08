import './app.css'
import React, {useState, useEffect} from 'react';

import InputItem from './components/InputItem/InputItem';

import Head from './components/Head/Head';

function App() {

  const [selectItems, setSelectItems] = useState(false)
  const [cityList, setCityList] = useState(false)
  const [cityListSorted, setCityListSorted] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordDirty2, setPasswordDirty2] = useState(false)
  const [emailError, setEmailError] = useState('Укажите E-mail')
  const [passwordError, setPasswordError] = useState('Укажите пароль')
  const [passwordError2, setPasswordError2] = useState('Укажите пароль')



  useEffect(() => {
    if (!cityList) {
      fetch("https://api.npoint.io/cd8ead148fa570d52ad5")
      .then(response => response.json())
      .then(json => setCityList(json))
    }
  })

  useEffect(() => {
    if (cityList) {
      let arr = []
      let maxSity = {population: 0}

      cityList.forEach((item, index) => {

        if (Number(item.population) > 50000) {

          arr.push(item)

          if (maxSity.population < Number(item.population)) {
            maxSity = item
          }
          
        }

      })

      arr.sort()
      const i = arr.findIndex(item => item.population === maxSity.population)
      arr.splice(i, 1)
      arr.unshift(maxSity)
      setCityListSorted(arr)

    }
  }, [cityList])

  function showSelectItems() {
    setSelectItems(!selectItems)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Неверный E-mail')
    } else {
      setEmailError('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)

    if (e.target.value.length < 5) {
      setPasswordError('Используйте не менее 5 символов')
      if(!e.target.value) {
        setPasswordError('Укажите пароль')
      }
    } else {
      setPasswordError('')
    }

    if (password2 === e.target.value) {
      setPasswordError2('')
    } else {
      setPasswordError2('Пароли не совпадают')
    }

  }

  const passwordHandler2 = (e) => {
    setPassword2(e.target.value)

    if (e.target.value.length < 5) {
      setPasswordError2('Используйте не менее 5 символов')

      if(!e.target.value) {
        setPasswordError2('Укажите пароль')
      }
    } else {
      setPasswordError2('')
    }

    if (password !== e.target.value) {
      setPasswordError2('Пароли не совпадают')
      if(!e.target.value) {
        setPasswordError2('Укажите пароль')
      }
    }

  }

  function blurHandler(e) {
    switch(e.target.name) {

      case 'password':
        setPasswordDirty(true)
        break

      case 'password2':
        setPasswordDirty2(true)
        break

      case 'email':
        setEmailDirty(true)
        break

      default:
        
    }
  }

  return (
    <div className="App">
      <div className="wrapper-main">

        <Head/>

        <form className="form">

          <div className="form__input-wrapper">
            <div className="form__name">Ваш город</div>
              <div onClick={showSelectItems} className="city-list">

              <select className="select-option__wrapper"  >

                {cityListSorted 
                ? cityListSorted.map((i, index) => 
                  <option 
                    className="select-option__item" 
                    value={i.city} 
                    key={index} 
                  >{i.city}</option>
                ) 
                : <option></option>}

              </select>


              </div>
          </div>

          <div className="line"></div>

          <div className="form__input-wrapper">
            <div className="form__name">Пароль</div>
            <label>
              <input onChange={passwordHandler} value={password} onBlur={e => blurHandler(e)} name='password' type="password" />
              {(passwordDirty && passwordError) && <div>{passwordError}</div>}
            </label>
            
            <div className="form__description">Ваш новый пароль должен содержать не менее 5 символов.</div>
          </div>

          <div className="form__input-wrapper">
            <div  className="form__name">Пароль еще раз</div>
            <label>
              <input onChange={passwordHandler2} value={password2} onBlur={e => blurHandler(e)} name='password2' type="password" />
              {(passwordDirty2 && passwordError2) && <div>{passwordError2}</div>}
            </label>
            
            <div className="form__description">Повторите пароль, пожалуйста, это обезопасить вас с нами на случай ошибки.</div>
          </div>

          <div className="line"></div>

          <div className="form__input-wrapper">
            <div className="form__name">Электронная почта</div>
            <label>
              <input onChange={emailHandler} value={email} onBlur={e => blurHandler(e)} name='email' type="text" />
              {(emailDirty && emailError) && <div>{emailError}</div>}
            </label>
            
            <div className="form__description">Можно изменить адрес, указанный при регистрации.</div>
          </div>

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
 //