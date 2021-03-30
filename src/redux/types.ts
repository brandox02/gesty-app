import { typeDataCuatrimestre, typeMateria, typeDataCuatrimestres } from '../LocalStorage';
import { typeApiMateria } from '../ApiMaterias';
import { Action } from 'redux';


export interface CuatrimestreAction extends Action {
     type: string,
     payload: {

          cuatrimestre: typeDataCuatrimestre,
          cuatrimestres: typeDataCuatrimestres
          indiceCuatrimestre: number
     }
}

export interface MateriaAction extends Action {
     type: string,
     payload: {
          materia: typeMateria,
          indiceCuatrimestre: number,
          indiceMateria: number
     }
}

export type RealAction = MateriaAction | CuatrimestreAction;

export type CuatrimestreDispatch = (arg0: RealAction) => void;

export type CuatrimestreState = typeDataCuatrimestres

export type State = {
     cuatrimestres: CuatrimestreState,
     materiaRenderizado: typeApiMateria[]
}

export type materiaRenderizadoState = typeApiMateria[];

export interface materiaRenderizadoAction {
     type: string,
     payload: {
          materia?: typeApiMateria
          materias?: typeApiMateria[],
          materiaPrev?: typeApiMateria
     }
}
