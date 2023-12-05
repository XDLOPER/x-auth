import store from '../index.js'
import {_setAuth,_setTheme,_setLanguage,_setLoading,_setMainTitle,_setButtonBack,_setButtonNext,_setButtonSubmit} from './index.js'

export const setAuth = value => store.dispatch(_setAuth(value))
export const setTheme = value => store.dispatch(_setTheme(value))
export const setLanguage = value => store.dispatch(_setLanguage(value))
export const setLoading = value => store.dispatch(_setLoading(value))
export const setMainTitle = value => store.dispatch(_setMainTitle(value))
