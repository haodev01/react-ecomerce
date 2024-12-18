import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from '~/store/reducer/auth-reducer.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  auth: authReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
