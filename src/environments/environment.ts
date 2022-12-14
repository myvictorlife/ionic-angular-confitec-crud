// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'http://localhost:5001/my-custom-life-property/us-central1/api',
  //baseURL: 'https://us-central1-my-custom-life-property.cloudfunctions.net/api',
  firebaseConfig: {
    apiKey: 'AIzaSyDtjg20N6e4pzGbYxHRIJ5-QfphVl84vQQ',
    authDomain: 'confitec-crud-monorepo.firebaseapp.com',
    projectId: 'confitec-crud-monorepo',
    storageBucket: 'confitec-crud-monorepo.appspot.com',
    messagingSenderId: '88932052895',
    appId: '1:88932052895:web:9607f934f0f071aeb4d7aa',
    measurementId: 'G-SBQLJ92DRF'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
