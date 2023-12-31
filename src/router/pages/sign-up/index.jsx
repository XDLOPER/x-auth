import React,{useEffect} from 'react'
import { Outlet, useNavigate, useOutletContext } from 'react-router';
import {setButtonBack, setButtonNext, setButtonSubmit} from '../../../store/buttons/actions'
import {setMainTitle} from '../../../store/app/actions'
import {useButtonBackActive, useButtonNextActive} from '../../../store/buttons/hooks'



function SignUp({context}) {
  const [setFormData,buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()

  const URL = window.location.pathname

  useEffect(() => {
    setMainTitle('kayıt ol');
    
    setButtonBack({title:'login',active:true,URL:'/'});
    setButtonSubmit({active:false});
    setButtonNext({title:'',active:true});
  }, [useButtonNextActive,useButtonBackActive]); // neden useButtonNextActive,useButtonBackActive yaptığımı unuttum
 
  useEffect(() => {
    const lastSegment = URL.split('/').pop();
    if (lastSegment === 'sign-up' || 'sign-up/') {
      navigate('step-1');
    }
  }, [navigate]);
  
  return (
    <>
      <Outlet context={[setFormData,buttonFormDataSubmitRef]}/>
    </>
  );
}

/*
    <div className="App">
      <div className="wrapper">
        <div className="auth">
        {
          login ?
          <>
            <input type="text" key="4" name="username" value={authForm.username} onChange={onChangeHandler} placeholder="username/email"/>
            <input type="text" key="5" name="password" value={authForm.password} onChange={onChangeHandler} placeholder="parola"/>
            <button type="button" onClick={(e)=>{onClickHandler(authForm,setLogin,'login',e)}}>giriş yap</button>
          </>
           : 
          <>
            <input type="text" key="1" name="username" value={authForm.username} onChange={onChangeHandler} placeholder="username"/>
            <input type="text" key="2" name="email" value={authForm.email} onChange={onChangeHandler} placeholder="email"/>
            <input type="text" key="3" name="password" value={authForm.password} onChange={onChangeHandler} placeholder="parola"/>
            <button type="button" key="4" onClick={(e)=>{onClickHandler(authForm,setLogin,'register',e)}}>kayıt ol</button>
          </>
        }
        {
          login ?
            <button onClick={(e)=>setLogin((false))}>kayıt olmak için tıkla</button>
          :
            <button onClick={(e)=>setLogin((true))}>giriş yapmak için</button>
        }
        </div>
      </div>
    </div>
*/

export default SignUp
