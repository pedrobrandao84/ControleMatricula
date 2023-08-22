import React, { useState } from 'react';
import InputForm from '../../components/input/InputForm';
import ConfirmCancelButton from '../../components/button/ConfirmCancelButton';
import Logo from '../../images/logo_512.png';

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(email, password);
    };

    const handleConfirm = () => {
        console.log('Confirmado!');
    };

    const handleCancel = () => {
        console.log('Cancelado!');
    };

    return (
        <div>
            <img
                src={Logo}
                alt="Logo Academia das Especificas"
                className="display: inline-block"
                width={350}
            />
            <h2>Login</h2>
            <InputForm
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <ConfirmCancelButton hideCancel={true} onConfirm={handleConfirm} onCancel={handleCancel} />
        </div>
    );
};

export default Login;
