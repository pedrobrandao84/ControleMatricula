import React, { useContext, useState } from 'react';
import InputForm from '../../components/input/InputForm';
import ConfirmButton from '../../components/button/ConfirmButton';
import Logo from '../../images/logo_512.png';
import { AuthContext } from '../../context/AuthContext';

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleConfirm = () => {
        console.log('Confirmado!');
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
            <ConfirmButton onConfirm={handleConfirm} />
        </div>
    );
};

export default Login;
