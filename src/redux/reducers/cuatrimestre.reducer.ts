import { CuatrimestreAction, CuatrimestreState, MateriaAction, RealAction } from '../types';

import {
    ADD_CUATRIMESTRE, REPLACE_CUATRIMESTRES, DELETE_CUATRIMESTRE, ADD_MATERIA, UPDATE_MATERIA,
    DELETE_MATERIA
} from '../actions/cuatrimestre.action';

export const inicialState: CuatrimestreState = [[]];

const cuatrimestre = (state: CuatrimestreState = inicialState, action: RealAction) => {
    switch (action.type) {
        //----------------------------------------------------------------------------------------------------------
        case ADD_CUATRIMESTRE:
            const newState1: CuatrimestreState = [...state, (action as CuatrimestreAction).payload.cuatrimestre]; // cuatrimestre
            return newState1;
        //----------------------------------------------------------------------------------------------------------
        case DELETE_CUATRIMESTRE:
            const newState2: CuatrimestreState = state.filter((cuatrimestre, index) => index !== (action as CuatrimestreAction).payload.indiceCuatrimestre);
            return newState2;
        //----------------------------------------------------------------------------------------------------------
        case REPLACE_CUATRIMESTRES:

            const newState3: CuatrimestreState = state = (action as CuatrimestreAction).payload.cuatrimestres;
            return newState3;
        //----------------------------------------------------------------------------------------------------------
        case ADD_MATERIA:
            const newState4: CuatrimestreState = state.map((cuatrimestre, indiceCuatrimestre) => {
                if (indiceCuatrimestre === action.payload.indiceCuatrimestre) {
                    const cuatrimestreActualizado = [...cuatrimestre, (action as MateriaAction).payload.materia];
                    return cuatrimestreActualizado;
                }
                return cuatrimestre;
            })
            return newState4;
        //--------------------------------------------------------------------------------------------------
        case UPDATE_MATERIA:

            const newState5: CuatrimestreState = state.map((cuatrimestre, indiceCuatrimestre) => {

                if (indiceCuatrimestre === action.payload.indiceCuatrimestre) {
                    const cuatrimestreActualizado = cuatrimestre.map((_materia, _indiceMateria) => {

                        const { payload: { indiceMateria, materia } } = action as MateriaAction;

                        if (_indiceMateria === indiceMateria) { // indiceMateria
                            const materiaModificada = materia;
                            return materiaModificada;
                        }
                        return _materia;
                    });
                    return cuatrimestreActualizado;
                }
                return cuatrimestre;
            });
            return newState5;

        //--------------------------------------------------------------------------------------------------
        case DELETE_MATERIA:
            const newState6: CuatrimestreState = state.map((cuatrimestre, indiceCuatrimestre) => {
                
                if (indiceCuatrimestre === (action as MateriaAction).payload.indiceCuatrimestre) {

                    const cuatrimestreActualizado = cuatrimestre.filter((materia, indiceMateria) => indiceMateria !== (action as MateriaAction).payload.indiceMateria)
                    return cuatrimestreActualizado
                }
                return cuatrimestre;
            })
            return newState6;
        //--------------------------------------------------------------------------------------------------
        default: return state;
    }
}

export default cuatrimestre
