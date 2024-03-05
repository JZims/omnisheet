import React, { useState } from 'react';

//Placeholder Component

const CharacterSheetWindow: React.FC = () => {
  const [characterInfo, setCharacterInfo] = useState({
    characterName: '',
    player: '',
    race: '',
    class: '',
    alignment: '',
    background: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCharacterInfo({
      ...characterInfo,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <div className="text-3xl font-bold mb-4">Character Sheet</div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="characterName">
          Character Name
        </label>
        <input
          type="text"
          id="characterName"
          name="characterName"
          value={characterInfo.characterName}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <label className="block text-sm font-bold mb-2" htmlFor="characterName">
          Character Class
        </label>
        <input
          type="text"
          id="class"
          name="class"
          value={characterInfo.class}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          Save Character
        </button>
      </div>
    </div>
  );
};

export default CharacterSheetWindow;
