import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBzxOIb6wvZ3QqRGdDkII9slGhhix7t6DE',
  authDomain: 'bairesbookdev.firebaseapp.com',
  projectId: 'bairesbookdev',
  storageBucket: 'bairesbookdev.appspot.com',
  messagingSenderId: '998484083629',
  appId: '1:998484083629:web:bd524b456203232f039724'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
