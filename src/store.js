//En el store va a estar almacenada la data de nuestra app la informacion que yo voy a utilizar.
//Vamos a crear nuestra store:

import { createStore } from "redux"
//create store recibe como parametro una funcion que es la encargada de hacer los cambios en nuestra app y esta funcion se conoce como funcion reductora.

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Maria Fenanda Mendez",
        foto: "https://media.licdn.com/dms/image/C4E03AQGUG_PIPT42uw/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=MeWGOlw2UB4GiC6-4ADhNsUqS9Ql4jen-xTpkSPQD1I"
    },
    {
        id: 2,
        nombre: "Miguel Fajardo",
        foto: "https://avatars3.githubusercontent.com/u/47123966?s=400&v=4"
    },
    {
        id: 3,
        nombre: "Nícolas Martinez",
        foto: "https://media.licdn.com/dms/image/C4D03AQHFA8d9p1JjEg/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=xB23jRF8trJt9nT08VMiGkncjKbKt-dm7pzqI8YsL-w"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    return state
}

export default createStore(reducerEntrenador)
