import { useState } from 'react';

export function Page2() {
  // State to hold scores, banks, and names for each player
  const [scores, setScores] = useState<number[]>([]);
  const [bankScores, setBankScores] = useState<number[]>([]);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>('');
  const [cowJesusEnabled, setCowJesusEnabled] = useState<boolean>(true); // State for toggling Cow Jesus functionality

  // Function to add a new player
  const addPlayer = (): void => {
    if (newPlayerName.trim()) {
      setScores((prevScores) => [...prevScores, 0]);
      setBankScores((prevBankScores) => [...prevBankScores, 0]);
      setPlayerNames((prevNames) => [...prevNames, newPlayerName.trim()]);
      setNewPlayerName(''); // Clear the input field after adding
    }
  };

  // Function to handle the score updates
  const handleScoreChange = (playerIndex: number, action: 'add' | 'multiply' | 'resetOthers' | 'cowJesus'): void => {
    setScores((prevScores) => {
      const newScores = [...prevScores];
      
      switch (action) {
        case 'add':
          newScores[playerIndex] += 1;
          break;
        case 'multiply':
          newScores[playerIndex] *= 2;
          break;
        case 'cowJesus':
          if (cowJesusEnabled) {
            newScores[playerIndex] += 100;
          }
          break;
        case 'resetOthers':
          for (let i = 0; i < newScores.length; i++) {
            if (i !== playerIndex) {
              newScores[i] = 0;
            }
          }
          break;
        default:
          break;
      }

      return newScores;
    });
  };

  // Function to handle the banking of a player's score
  const handleBank = (playerIndex: number): void => {
    setBankScores((prevBankScores) => {
      const newBankScores = [...prevBankScores];
      newBankScores[playerIndex] += scores[playerIndex];
      return newBankScores;
    });
    // Reset the player's current score after banking
    setScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[playerIndex] = 0;
      return newScores;
    });
  };

  // Render cow images based on the player's score
  const renderCows = (count: number): JSX.Element[] => {
    const cowImageUrl = '/cow.png';
  
    return Array.from({ length: count }).map((_, index) => (
      <img
        key={index}
        src={cowImageUrl}
        alt="Cow"
        style={{
          width: '50px',
          height: '50px',
          margin: '5px',
          backgroundColor: 'transparent',
        }}
      />
    ));
  };

  return (
    <div>
      <h1> Cows Game</h1>

      {/* Toggle for enabling/disabling Cow Jesus */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={cowJesusEnabled}
            onChange={() => setCowJesusEnabled(!cowJesusEnabled)}
          />
          Enable Cow Jesus (+100 points)
        </label>
      </div>

      <h2>Add Players</h2>
      <div>
        <input
          type="text"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          placeholder="Enter player's name"
          style={{ marginRight: '10px' }}
        />
        <button onClick={addPlayer}>Add Player</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' }}>
        {playerNames.map((name, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              minWidth: '50%',
              padding: '10px',
              border: '1px solid black',
              textAlign: 'center',
              margin: '10px',
              backgroundImage: 'url(/pasture.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3>{name}</h3>
            <p>Score: {scores[index]}</p>
            <p>Bank: {bankScores[index]}</p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {renderCows(scores[index])}
            </div>
            <button onClick={() => handleScoreChange(index, 'add')}>Cow</button>
            <button onClick={() => handleScoreChange(index, 'multiply')}>Church</button>
            <button onClick={() => handleScoreChange(index, 'resetOthers')}>Graveyard</button>
            <button onClick={() => handleScoreChange(index, 'cowJesus')} disabled={!cowJesusEnabled}>
              Cow Jesus
            </button>
            <button onClick={() => handleBank(index)}>Bank</button>
          </div>
        ))}
      </div>
    </div>
  );
}
