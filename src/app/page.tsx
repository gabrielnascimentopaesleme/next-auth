import Image from 'next/image';
import GitHub from './components/gitHub'
import Credentials from './components/credentials'

export default function Home() {
  return (
    <div>
      <Credentials/>
      <GitHub/>
    </div>
  );
}
