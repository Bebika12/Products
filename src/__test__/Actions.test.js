// ./**tests**/actions_test.js
import configureMockStore from 'redux-mock-store'


const latestNews = (output) => ({
  type: 'GET_PRODUCTS',
  output
});

// Create a mock store
const mockStore = configureMockStore()
const store = mockStore({})
describe('action creators', () => {
  it('creates GET_PRODUCTS when fetching data ', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    store.dispatch(latestNews(
      {
        "id":1,
        "name":"Grand Piano",
        "price":44500,
        "type":"manual",
        "description":"Grand piano is great for beginner or adult. It adopted the famous French dream series, its sound source has stable, clearer sound and more vivid expression of the performance of the player.What’s more, keyboard material upgrade, and this piano features multi functions, so you can learn piano more easily and happily!",
        "img":"https://i.ibb.co/wc6qzwW/piano.png"
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  });
});