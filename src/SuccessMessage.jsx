import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const SuccessMessage = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="success-message">
      <CheckCircle className="icon" />
      <span>{message}</span>
      <button onClick={() => setVisible(false)}>✖</button>
    </div>
  );
};

export default SuccessMessage;
