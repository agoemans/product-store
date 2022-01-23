### Layout / plan

Each Product card will have:
- Image
- list of model colors under image
- price
- in stock / out of stock text
- Buy now button
- usp has the display text for promotional text

Each model page will have:
- Title
- reviews underneath
- Left panel:
  - main image
  - bar underneath with galley images
- Right panel
  - kleur
  - model list
  - memory
  - usp list
  - price (totally and money)
  - buy now button

### Todo:

#### Reducer:
- get model list per product (to toggle image + color)
- get different type of products 
- loading,loaded - toggle prop in reducer
- unit test (nice to have)
- Move reducers and selectors to separate files (optional for later)

#### React
- per product, show model color options (maybe underneath image)
- create a top bar to switch between product types
- Loading, loaded - set up what to show for fetch status
- move button to useEffect for fetch
- show loader when loading status = loading

#### Webpack
- fix watch (need to look up watch for dev server for webpack 5)