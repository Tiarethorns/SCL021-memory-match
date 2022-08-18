import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
  it('verificar elementos', ()=> {
    const el = App();
    expect(el.querySelectorAll('.cards').length).toBe(18)

  })
});
