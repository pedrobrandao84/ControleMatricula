import React from 'react';
import './Button.css'; // Você pode adicionar estilos aqui

interface ConfirmCancelButtonProps {
  onCancel: () => void;
}

const ConfirmCancelButton: React.FC<ConfirmCancelButtonProps> = ({
  onCancel,
}) => {
  return (
    <div className="confirm-cancel-button">
      <button className="cancel-button" onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
};

export default ConfirmCancelButton;
