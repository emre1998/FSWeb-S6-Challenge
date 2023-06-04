// Karakter bileşeniniz buraya gelecek
import Dropdown from "./Dropdown";
import Filmler from "./Filmler";

const Karakter = ({chars,films}) => {

  return(
      <div>
        <h1>Characters</h1>
        <div className="character-details">
        {chars.map((char,i) => 
           <Dropdown key={i} title={char.name}  className="custom-box" >
                <p>Name: {char.name}</p>
                <p>Height:{char.height}</p>
                <p>Mass:{char.mass}</p>
                <p>Hair Color:{char.hair_color}</p>
                <p>Skin Color:{char.skin_color}</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Birth Year:{char.birth_year}</p>
                <p>Gender: {char.gender},</p>
                <p>Films: </p>
                <Filmler char={char} films={films} />
            </Dropdown>
)}
                </div>
         
        
      </div>
    );
  
  }
export default Karakter;