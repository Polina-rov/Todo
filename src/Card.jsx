import './App.css';

import Image from './Image';
import Wrapper from './Wrapper';
import Header from './Header';

export default function Card() {
  return (
    <article className="card">
      <Image />
      <Header />
      <Wrapper />
    </article>
  );
}
