import Form from '../containers/Form';
import Head from 'next/head';
import config from '../config/appConfig';

const Index = () => {
  return (
    <div className='wrapper'>
      <Head>
        <title>{config.title} | {config.author}</title>
	      <meta name="description" content="Link generator for The Reject Shop" />
        <link rel="icon" size="16x16" href="https://assets.rejectshop.com.au/careers/assets/icon-16x16.png" />
        <link rel="icon" size="32x32" href="https://assets.rejectshop.com.au/careers/assets/icon-32x32.png" />
        <link rel="icon" size="64x64" href="https://assets.rejectshop.com.au/careers/assets/icon-64x64.png" />
        <link rel="icon" size="128x128" href="https://assets.rejectshop.com.au/careers/assets/icon-128x128.png" />
      </Head>
      <div className='container'>
        <div className='utm-form'>
          <h1>{config.title}</h1>
          <p>{config.description}</p>

          <Form />
        </div>
        <div className='rhs-banner' style={{backgroundImage: `url(${config.image})`}}>
            &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Index;
