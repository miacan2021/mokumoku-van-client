import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Admin from './Admin';
import { Slug } from './Slug'


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/:slug' element={<Slug />}/>
    <Route path='admin' element={<Admin />}/>
  </Routes>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


