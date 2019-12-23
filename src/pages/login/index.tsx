
import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
// import { setSessionStorage } from '../../utils/storage';
// import {HistoryBase} from '../../utils/common';
import { FormComponentProps } from 'antd/es/form';
import Constants from '../../redux/constants';
import {loginClickAn} from '../../redux/actions';
import { RouteComponentProps } from 'react-router-dom';
import {UserBase} from '../../utils/common'
/**************** 此处为 antd 的From 类型定义 *******************/ 

export interface FormProps extends FormComponentProps,UserBase {
  
}
// RouteComponentProps<any>  中就包含history 相关类型定义
export interface LoginProps extends FormProps,RouteComponentProps<any>  {
  // history:HistoryBase,
}
 

const Login: React.SFC<LoginProps> = ({ history, form }) => {
  /** ***********redux**************** */
  const dispatch = useDispatch();
  const num = useSelector((state:any) => state.sagaTest.num);
  // const resizeEvent = () => {
  //   setHtmlFontSize();
  // };
  // useEffect(() => {
  //   setHtmlFontSize();
  //   window.addEventListener('resize', resizeEvent);
  //   return () => {
  //     window.removeEventListener('resize', resizeEvent);
  //     resetHtmlFontSize();
  //   };
  // }, []);
   
  useEffect(() => {
    dispatch({type:Constants.CLEAR_ALL})
  },[])
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    console.log(num);
    e.preventDefault();
    form.validateFields((err: any, values: UserBase) => {
      // 去掉用户输入帐号密码时输入的空格
      // const username = values.username.replace(/\s+/g, '');
      // const password = values.password.replace(/\s+/g, '');
      // console.log(username, password);
      const { username, password } = values;
      if (!err) {
        console.log(values)
        dispatch(loginClickAn(values))
      }
    });
  };
  const { getFieldDecorator } = form;
  return (
    <div className='login-container'>
      <h1 className='login-title'>AMBER SYSTEM</h1>
      <Form className='login-form' onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(<Input placeholder='Username' autoComplete="off" prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type='user' />} />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              placeholder='Password'
              prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} type='lock' />}
              type='password'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className='login-form-forgot' href={`${process.env.PUBLIC_URL}/`}>
            Forgot password
          </a>
          <div>
            <Button className='login-form-button' htmlType='submit' type='primary'>
              Log in
            </Button>
          </div>
          Or
          <a href={`${process.env.PUBLIC_URL}/`}> register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};



export default Form.create<FormProps>({ name: 'normal_login' })(Login);
