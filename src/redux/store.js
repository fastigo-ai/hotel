import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from "./slices/authSlice";

import bookingReducer from "./slices/bookingSlice"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE', 'persist/REGISTER'],
      },
    }),
});

export const persistor = persistStore(store);
