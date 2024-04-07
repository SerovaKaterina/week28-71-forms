import React, { useState } from 'react';

function TextInput() {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  // Обработчик изменения текста в поле ввода
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Обработчик нажатия на кнопку "Добавить"
  const handleAddButtonClick = () => {
    //Преобразование текста в заглавные буквы
    const formatted = inputText.toUpperCase();
    setFormattedText(formatted);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст..."
      />
      <button onClick={handleAddButtonClick}>Добавить</button>
      {formattedText && <p style={{ color: 'red', textTransform: 'uppercase' }}>{formattedText}</p>}
    </div>
  );
}

export default TextInput;