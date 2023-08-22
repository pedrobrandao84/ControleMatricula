import React from 'react';
import './ConfirmCancelButton.css'; // Você pode adicionar estilos aqui

interface ConfirmCancelButtonProps {
  onConfirm: () => void;
  onCancel: () => void;
  hideCancel: boolean | undefined;
}

const ConfirmCancelButton: React.FC<ConfirmCancelButtonProps> = ({
  onConfirm,
  onCancel,
  hideCancel,
}) => {
  return (
    <div className="confirm-cancel-button">
      <button className="custom-button" onClick={onConfirm}>
        Confirmar
      </button>
      <button className="cancel-button" onClick={onCancel} hidden={hideCancel}>
        Cancelar
      </button>
    </div>
  );
};

export default ConfirmCancelButton;
