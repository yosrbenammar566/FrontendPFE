import logo from './logo.svg';
import './App.css';

function App() {
  const name ="Yosr ben ammar"
  //const etudiant={nom:"hana",prenom:"wasli"}
  const listUser =[
    {nom:"bouyosr",prenom:"ammar",id:0},
    {nom:"slimen",prenom:"mtar",id:1},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {name}
        {listUser.map(function(user){
          return <div key={user.id}>
            {user.nom}

          </div>

        })}
      </header>
    </div>
  );
}

export default App;
