// src/store/index.js
import { createStore } from 'redux';

// ====================== Root Reducer ======================
import { rootReducer } from './root-reducer';

const store = createStore(rootReducer);

export default store;
