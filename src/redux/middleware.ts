import { CuatrimestreDispatch, MateriaAction, RealAction, State } from '../redux/types';
import { Store } from 'redux';
import { replaceLocalStorage } from '../LocalStorage';
import { DELETE_MATERIA, } from './actions/cuatrimestre.action';
import { borrarMateriaSeleccionado } from './actions/materiaSeleccionado.action';

type Middlerware = (store: any) => (next: CuatrimestreDispatch) => (action: RealAction) => void

const middleware: Middlerware = (store: Store) => next => action => {
    if (action.type === DELETE_MATERIA) {
        // const { creditos, nombre } = (action.payload as MateriaAction).materia;

        const { payload: { materia: { creditos, nombre } } } = action as MateriaAction;
        store.dispatch(borrarMateriaSeleccionado({ creditos, materia: nombre }));
    }
    // next it
    next(action);

    setTimeout(() => {
        const state: State = store.getState();
        replaceLocalStorage(state);
    }, 500);

}

export default middleware