import React from 'react';

const peoples = [
  'Ivan',
  'Jonny',
  'Bimba',
  'Kyle',
  'Arni',
  'Matip',
  'Rich',
  'Bussijaam'
];

function App() {
  const [ searchTerm, setSearchTerm ] = React.useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  const [ searchResult, setSearchResult ] = React.useState([]);

  // with useEffect
  React.useEffect(() => {
    const results = peoples.filter(person => 
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
  }, [searchTerm]);

  // or just like below
  // const results = !searchTerm ? peoples : peoples.filter(person => person.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase().trim()));
  return (
    <div>
      <form>
        <input type='search' placeholder='search' value={ searchTerm } onChange={ handleChange } />
      </form>
      <ul>
        {
          searchResult.map(item => <li>{ item }</li>)
        }
      </ul>
    </div>
  );
}

export default App;
