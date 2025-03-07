import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "angular-project-a7d09", appId: "1:1060679694230:web:22d459273179758e168fb7", storageBucket: "angular-project-a7d09.firebasestorage.app", apiKey: "AIzaSyCVYM_PTRfm6vwHY6lQK4SUdLOng0c9Skk", authDomain: "angular-project-a7d09.firebaseapp.com", messagingSenderId: "1060679694230", measurementId: "G-P93QP79TB7" })), provideAuth(() => getAuth())]
};
