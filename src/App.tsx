import React from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import Card from './components/Card';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';

const App: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [characterId, setCharacterId] = React.useState<number>(1);

  React.useEffect(()=> {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setCharacter(result);
      setIsLoading(false);
    }

    fetchDataFromApi();
  }, [characterId]);

  return (
    <Wrapper characterId={characterId}>
      {
        isLoading ? 
        (
          <div>Loading...</div>
        ) 
        : 
        (
          <>
            <Card name={character.name} imgUrl={character.img_url} gender={character.gender}/>
            <button onClick={(e)=>{setCharacterId(Math.floor(Math.random()*10)+1)}}>Next Character</button>
          </>
        )
      }
    </Wrapper>
  );
};

export default App;
