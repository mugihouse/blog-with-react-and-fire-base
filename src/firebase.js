import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6e2DD5X9T2ahpsIOAhXh9nyiLppU9wsU",
  authDomain: "blog-f498b.firebaseapp.com",
  projectId: "blog-f498b",
  storageBucket: "blog-f498b.appspot.com",
  messagingSenderId: "127704309016",
  appId: "1:127704309016:web:3d36e4ac2906e5bb88126d",
};

const app = initializeApp(firebaseConfig);
// 認証の初期化
const auth = getAuth(app);
// インスタンス化(GoogleAuthProviderクラスを実態として使えるようにする)
const provider = new GoogleAuthProvider();
// dbの初期化
const db = getFirestore(app);

export { auth, provider, db };
