import React from 'react';
import './Button.css'; // Você pode adicionar estilos aqui

interface ConfirmCancelButtonProps {
  onConfirm: () => void;
}

const ConfirmCancelButton: React.FC<ConfirmCancelButtonProps> = ({
  onConfirm
}) => {
  return (
    <div className="confirm-cancel-button">
      <button className="custom-button" onClick={onConfirm}>
        Confirmar
      </button>
    </div>
  );
};

export default ConfirmCancelButton;
