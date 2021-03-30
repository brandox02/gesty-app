import { typeApiMateria } from '../../ApiMaterias';
import { typeDataCuatrimestre, typeDataCuatrimestres, typeMateria } from '../../LocalStorage';
import { generateId } from '../../utils';
import { RealAction } from '../types';

// CONSTANTS
export const ADD_CUATRIMESTRE = 'ADD_CUATRIMESTRE';
export const DELETE_CUATRIMESTRE = 'DELETE_CUATRIMESTRE';
export const REPLACE_CUATRIMESTRES = 'REPLACE_CUATRIMESTRES';
export const ADD_MATERIA = 'ADD_MATERIA';
export const DELETE_MATERIA = 'DELETE_MATERIA';
export const UPDATE_MATERIA = 'UPDATE_MATERIA';

//--------------------------------------------------------------------------------------------------------------------------------------

// const defaultActionCuatrimestre: RealAction = {
//     type: '',
//     payload: {
//         cuatrimestre: [], cuatrimestres: [], indiceCuatrimestre: 0
//     }
// }

// const defaultActionMateria: RealAction = {
//     type: '',
//     payload: {
//         indiceCuatrimestre: 0, indiceMateria: 0,
//         materia: { creditos: 0, nombre: '', calificacion: 0, id: generateId(), indice: 0 }
//     }
// }

//--------------------------------------------------------------------------------------------------------------------------------------

export const addCuatrimestre = (cuatrimestre: typeDataCuatrimestre): RealAction => ({
    type: ADD_CUATRIMESTRE,
    payload: {
        cuatrimestre,
        indiceCuatrimestre: 0,
        cuatrimestres: []

    }
})

export const deleteCuatrimestre = (indiceCuatrimestre: number): RealAction => ({
    type: DELETE_CUATRIMESTRE,
    payload: {
        cuatrimestre: [],
        indiceCuatrimestre,
        cuatrimestres: []
    }
})

export const replaceCuatrimestres = (cuatrimestres: typeDataCuatrimestres): RealAction => ({
    type: REPLACE_CUATRIMESTRES,
    payload: {
        cuatrimestre: [],
        indiceCuatrimestre: 0,
        cuatrimestres
    }
})

export const addMateria = (indiceCuatrimestre: number, materia: typeMateria): RealAction => ({
    type: ADD_MATERIA,
    payload: {
        indiceCuatrimestre,
        materia,
        indiceMateria: 0

    }
})

export const deleteMateria = (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria): RealAction => ({
    type: DELETE_MATERIA,
    payload: {
        indiceCuatrimestre,
        materia,
        indiceMateria
    }
})

export const updateMateria = (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria): RealAction => {
    return ({
        type: UPDATE_MATERIA,
        payload: {
            indiceCuatrimestre,
            materia,
            indiceMateria
        }
    })
}