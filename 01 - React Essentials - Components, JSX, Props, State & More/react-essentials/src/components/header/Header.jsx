const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImg from './assets/components.png';
import Header from './Header.css';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


const Header = () => {
       const description = reactDescriptions[genRandomInt(2)];

  return (
     <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

export default Header