import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Homepage from "./components/Home/Homepage";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}>
                  <Route index element={<Homepage/>}/>
                  <Route path="/users" element={<User/>}/>
              </Route>
              <Route path="/admin" element={<Admin/>}>
                  <Route index element={<DashBoard/>}/>
                  <Route path="manage-user" element={<ManageUser/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </Provider>
);
reportWebVitals();
