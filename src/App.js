import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/Productlist/Productlist";
import Form from "./components/Form/Form";
import Form2 from "./components/Form2/Form2";
function App() {
    const {onToggleButton, tg} = useTelegram();
  useEffect(() =>
    {
        tg.ready();
    }, [])


    return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'form'} element={<Form />}/>
            <Route path={'form2'} element={<Form2 />}/>
        </Routes>


    </div>
  );
}

export default App;
