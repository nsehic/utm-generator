import Header from '../components/Header';
import UTMForm from '../components/UTMForm';

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <UTMForm/>
      </div>
    </div>
  );
}