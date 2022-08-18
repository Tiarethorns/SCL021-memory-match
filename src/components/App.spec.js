import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const mockPokemons = {
      name: 'Pokemon',
      items: [
        { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
        { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#339933' },
      ],
    }
    const el = App(mockPokemons.items);
    expect(el instanceof HTMLElement).toBe(true);
  });

  it('verificar elementos', ()=> {
    const mockPokemons = {
      name: 'Pokemon',
      items: [
        { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png', bgColor: '#339933' },
        { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png', bgColor: '#339933' },
      ],
    }
    const el = App(mockPokemons.items);

    const cardsQtyExpected = mockPokemons.items.length * 2
    expect(el.querySelectorAll('.cards').length).toBe(cardsQtyExpected)
  })

  


});
