  import React,{useEffect} from 'react'
  import { Link,useOutletContext  } from 'react-router-dom'
  import { useFormik,Formik as LoginForm,Form ,Field} from 'formik'
  import * as Yup from 'yup'

  import {setButtonBack, setMainTitle,setButtonNext,setButtonSubmit} from '../../../store/app/actions.js'
  import Text from '../../../components/forms/text'
  import Checkbox from '../../../components/forms/checkbox'

const SignUp = (props) => {
  useEffect(() => {setMainTitle('oturum aç')})
  const context = useOutletContext();
   
  const initialValues = {
      usernameAndPhone:"",
      password:""
  }

  const validate = (values)=>{
      let errors = {}

      if(values.usernameAndPhone.length < 3){
          errors.usernameAndPhone = "required the three characters"
      }

      return errors
  }

  const validationSchema = Yup.object({
      password:Yup.string().required('Required')
  })

  const onSubmit = (values) => {
      console.log(values)
  }

  const formik = useFormik({
    initialValues,
    validate,
    validationSchema,
    onSubmit
  })

  const handleButtonSubmit = () => {
    // Formik'in içindeki submitForm fonksiyonunu çağırarak formu submit et
    formik.submitForm();
  };
  useEffect(()=>{
    setButtonBack({active:false,URL:''})
    setButtonSubmit({title:'oturum aç',active:true,URL:'/'})
    setButtonNext({active:false,URL:''})
  },[])
    return (
      <>
            <form onSubmit={formik.handleSubmit}>
                  <Text name="usernameAndPhone" type="text" placeholder="username & phone" value={formik.values.usernameAndPhone} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndPhone} error={formik.errors.usernameAndPhone}/>
                  <Text name="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
                  <Checkbox label="not forget me"></Checkbox>
            </form> 
              <br />
              <br />
            <Link to="/sign-in" style={{textAlign:"center",position:"absolute",left:"50%",transform:"translate(-50%)"}}>kayıt ol</Link>
      </>
    )
}

  export default SignUp
