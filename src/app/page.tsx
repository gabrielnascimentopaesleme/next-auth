import Image from 'next/image';
import GitHub from './components/gitHub'
import Credentials from './components/credentials'
import SignInGoogle from './components/google';

export default function Home() {
  return (
    <div>
      <Credentials/>
      <GitHub/>
      <SignInGoogle/>
    </div>
  );
}
