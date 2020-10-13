import Header from '../components/Header';
import UTMForm from '../components/UTMForm';
import Head from 'next/head';

export default function App() {
  return (
    <div className='wrapper'>
      <Head>
        <title>UTM Generator | The Reject Shop</title>
	<meta name="description" content="UTM generator for The Reject Shop" />
        <link rel="icon" size="16x16" href="https://assets.rejectshop.com.au/careers/assets/icon-16x16.png" />
        <link rel="icon" size="32x32" href="https://assets.rejectshop.com.au/careers/assets/icon-32x32.png" />
        <link rel="icon" size="64x64" href="https://assets.rejectshop.com.au/careers/assets/icon-64x64.png" />
        <link rel="icon" size="128x128" href="https://assets.rejectshop.com.au/careers/assets/icon-128x128.png" />
      </Head>
      <Header />
      <div className="container">
        <UTMForm/>
      </div>
    </div>
  );
}
