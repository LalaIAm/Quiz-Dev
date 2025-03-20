import Button from '../Button'
import './Logo.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className='layout'>
        <img data-test='logo' className='layer-1-icon' loading='lazy' alt='' src='/logo.svg' />
      </div>
      <div className='challenge'>
        <h1 data-test='title' className='test-your-knowledge'>Test your knowledge</h1>
        <b data-test='description' className='challenge-yourself-with'>
          Challenge yourself with randomly generated quizzes
        </b>
      </div>
      <div className='button-wrapper'>
        <Button data-test='button'>Let's Get Started</Button>
      </div>
    </div>
  );
};


export default Main;