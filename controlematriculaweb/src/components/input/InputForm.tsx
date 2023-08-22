import React, { InputHTMLAttributes } from 'react';
import './InputForm.css'; // Você pode adicionar estilos aqui

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  // Aqui você pode adicionar propriedades específicas do seu componente de input global, se necessário
}

const InputForm: React.FC<InputFormProps> = (props) => {
  return <input className="input-form" {...props} />;
};

export default InputForm;
