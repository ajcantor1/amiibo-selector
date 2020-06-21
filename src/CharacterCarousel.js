import React from 'react';
import './App.css';
import './css/styles.css';
import Character from './Character.js';
import axios from 'axios';

class CharacterCarousel extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      move: 0, 
      viewableCharacters: [], 
      selected: 4
    };

    this.loadCharacters = this.loadCharacters.bind(this);
    this.setMove = this.setMove.bind(this);
    this.renderCharacter = this.renderCharacter.bind(this);
  }

  componentDidMount() {
    /*
    axios.get('http://127.0.0.1:5000/load_amiibo').then(result => {
     
      const raw_character_data = result.data.characters;
      const promiseLoadCharacters = new Promise((resolve, reject) => {
        resolve(this.loadCharacters(raw_character_data));
      });

      promiseLoadCharacters.then((value) => {
        if(value === true) {
       
          const loadedCharacters = this.characters.slice(0,9);
      
          this.setState({
            viewableCharacters : loadedCharacters,
            selected: 4
          });
        }
      });
    });
    */
    this.characters = [

      new Character(0, '', '', ''),
      new Character(1, '', '', ''),
      new Character(2, '', '', ''),
      new Character(3, '', '', ''),

      new Character(4, 'Al',      './images/characters/al.png', ''),
      new Character(5, 'Anchovy', './images/characters/anchovy.png', ''),
      new Character(6, 'Ankha',   './images/characters/ankha.png', ''),
      new Character(7, 'Axel',    './images/characters/axel.png', ''),

      new Character(8, 'Bertha','./images/characters/bertha.png', ''),
      new Character(9, 'Bitty' ,'./images/characters/bitty.png', ''),
      new Character(10, 'Blanche','./images/characters/blanche.png', ''),

      new Character(11, 'Boris','./images/characters/boris.png', ''),
      new Character(12, 'Camofrog' ,'./images/characters/camofrog.png', ''),
      new Character(13, 'Carmen' ,'./images/characters/carmen.png'),

      new Character(14, 'Chow' ,'./images/characters/chow.png', ''),
      new Character(15, 'Filbert' ,'./images/characters/filbert.png', ''),
      new Character(16, 'Jay' ,'./images/characters/jay.png', ''),

      new Character(17, 'Mallary' ,'./images/characters/mallary.png', ''),

      new Character(18, 'Nibbles' ,'./images/characters/nibbles.png', ''),
      new Character(19, 'Peggy' ,'./images/characters/peggy.png', ''),
      new Character(20, 'Zucker' ,'./images/characters/zucker.png', ''),    
   
      new Character(21, '', '', ''),
      new Character(22, '', '', ''),
      new Character(23, '', '', ''),
      new Character(24, '', '', ''),
    ]

    const loadedCharacters = this.characters.slice(0,9);
      
    this.setState({
      viewableCharacters : loadedCharacters,
      selected: 4
    });
  }

  setMove(direction) {

    let new_selected = this.state.selected+direction;

    if(this.characters[new_selected].getName() == '') {
      return;
    }

    this.setState({
      move: direction,
      
    }, 
    () => {
      let viewableCharacters = this.state.viewableCharacters;

      if(direction == 1) {

  
          viewableCharacters.shift();
          viewableCharacters.push(this.characters[new_selected+4]);
          
      } 
      else if(direction==-1) {

        viewableCharacters.pop();
        viewableCharacters.unshift(this.characters[new_selected-4]);
        
      }

      this.setState({
        viewableCharacters: viewableCharacters,
        selected: new_selected
            
      });
    });
  
  }

  loadCharacters(raw_character_data){

    let totalCharacters = raw_character_data.length;

    console.log(raw_character_data);
    let characters  = raw_character_data.map((character, index) => 
      new Character( 
        index+4, 
        character.name, 
        'data:image/png;base64,'+character.image, 
        character.code
      )
    );
    
    for(let i = 0; i < 4; i++) {
      characters.unshift(new Character(i ,'','', ''));
    }

    for(let i = totalCharacters+4; i < totalCharacters + 8; i++) {
      characters.push(new Character(i ,'','', ''));
    }

    if(characters.length > 8) {
      this.characters = characters;
      console.log(this.characters.length)
      return true;
    } else {
      return false;
    }


  }

  renderCharacter(character) {
    if(character.getName() != '') {
      return (   
        <li key = {character.getNumber()}
          move = {this.state.move}
          onAnimationEnd={ ()=>
            this.setState({
              move: 0
            })
          }
          className= 'character' 
          chosen = {this.state.selected == character.getNumber() ? 1 : 0}>
            <img src={character.getImage()}/>
        </li>
      );
    } else {

      return (
      <li 
      onAnimationEnd={ ()=>
        this.setState({
          move: 0
        })
      }
        key = {character.getNumber()}
        move = {this.state.move}
      className= 'character inv'/>
      );
    }

  }

  render() {
    return (
    <div className='switch-screen-inner'>
      <div className='character-carousel'>
        <div className="arrow-nav"  onClick={() => this.setMove(-1)}>&lt;</div>
        <ul className='character-list'>
          {this.state.viewableCharacters.map((value, index) => {
            
              return this.renderCharacter(value);
            })
          }
        </ul>
        <div className="arrow-nav" onClick={() => this.setMove(1)}>></div>
      </div>
    </div>
    );
  }
}
export default CharacterCarousel;

