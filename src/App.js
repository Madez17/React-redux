import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado'
import "./styles/styles.sass"
//Vamos a crear nuestro componente principal(Esta es la estructura basica
//que va a tener nuestra aplicacion)

const App = () => (
    <Provider store={store}>
        <main>
            <h1>Edmanager</h1>
            <Jugadores />
            <EquipoSeleccionado />
        </main>
    </Provider>
   )

export default App;
