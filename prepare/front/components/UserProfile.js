import React, { useCallback } from "react";
import { Avatar, Card, Button } from 'antd';


const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
      
    return (
        <Card
        actions={[
            <div key="twit">짹짹<br/>0</div>,
            <div key="fllowing">팔로잉<br/>0</div>,
            <div key="fllower">팔로워<br/>0</div>,
        ]}
        >
            <Card.Meta
            avatar={<Avatar>Miya</Avatar>}
            title="Miya"
            />
            <Button onClick={onLogOut}>Logout</Button>
        </Card>
    );
}

export default UserProfile;