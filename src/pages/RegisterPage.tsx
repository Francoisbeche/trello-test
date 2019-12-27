import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import styled from 'styled-components';
import { useUser } from '../context/user';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
const RegisterComp = (props: any) => {
    const { getFieldDecorator } = props.form;
    const { user, dispatchUser, userAction } = useUser();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFields((err: any, values: any) => {
            if (!err) {
                try {
                    userAction.register(dispatchUser, { email: values.email, password: values.password }, props.history)
                } catch (err) {
                    console.log(err)
                }

            }
        });
    };
    return (
        <MyForm onSubmit={handleSubmit} className="login-form">
             <h2>Register</h2>
            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(
                    <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    register
          </Button>
                <Link to={'/login'}>Or Login Now</Link>
            </Form.Item>
            {user.error && user.error}
        </MyForm>
    );
}

const Register = Form.create({ name: 'normal_login' })(withRouter(RegisterComp));

export default Register

const MyForm = styled(Form)`
width: 400px;
margin: auto;
margin-top: 50px;
`;