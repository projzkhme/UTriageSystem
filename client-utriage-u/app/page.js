import Image from "next/image";

import firebaseApp from './config/firebaseConfig.js';

export default function Home() {
  console.log('Firebase Initialized:', firebaseApp);

  return (
    <div className="">
      <main className="">
        <h1>Firebase Connected Successfully 🎉</h1>
      </main>

      <footer className="">

      </footer>
    </div>
  );
}
