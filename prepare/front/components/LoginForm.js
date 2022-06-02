import React, { useCallback, useState, useMemo } from "react";
import { Form, Input, Button } from 'antd';
import Link from "next/link";
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top:10px;
`;


const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const style = useMemo(()=> ({marginTop:10}), []);

    const onChangeId = useCallback((e) =>{
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input 
                name="user-id" 
                value={id} 
                onChange={onChangeId} 
                required />
            </div>
            <div>
            <label htmlFor="user-password">Password</label>
                <br />
                <Input 
                name="user-password" 
                type="password"
                value={password} 
                onChange={onChangePassword} 
                required />
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false}>SignIn</Button>
                <Link href="/signup"><a><Button>SignUp</Button></a></Link>
            </ButtonWrapper>
        </Form>
    );
}

export default LoginForm;