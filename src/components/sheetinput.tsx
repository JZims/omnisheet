import React, { useState } from 'react';

interface TextField {
  id: number;
  value: string;
}

const MultipleTextFields: React.FC = () => {
  const [textFields, setTextFields] = useState<TextField[]>([
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ]);

  const handleTextFieldChange = (id: number, newValue: string) => {
    setTextFields(prevTextFields =>
      prevTextFields.map(field =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };

  return (
    <div>
      {textFields.map(field => (
        <input
          key={field.id}
          type="text"
          value={field.value}
          onChange={e => handleTextFieldChange(field.id, e.target.value)}
        />
      ))}
    </div>
  );
};

export default MultipleTextFields;
