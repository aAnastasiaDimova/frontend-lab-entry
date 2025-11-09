import React, { useState } from 'react';
import './App.css';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Поиск:{' '}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

interface NameListProps {
  names: string[];
}

const NameList: React.FC<NameListProps> = ({ names }) => {
  if (names.length === 0) {
    return <p>Пусто</p>;
  }

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

const App: React.FC = () => {
  const allNames: string[] = [
    'Дмитрий',
    'Мария',
    'Иван',
    'Валера',
    'Егор',
    'Елена',
    'Сергей',
    'Олеся',
    'Никита',
    'Тимур',
    'Саша'
  ];

  const [search, setSearch] = useState<string>('');

  const filteredNames = allNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Список студентов</h1>
      <SearchBox value={search} onChange={setSearch} />
      <p>Найдено: {filteredNames.length}</p>
      <NameList names={filteredNames} />
    </div>
  );
};

export default App;
