import React from 'react';
import { accordionData } from "./utils/content.js";
import Accordion from './components/Accordion.jsx';

const App = () => {
  return (
    <div className="accordion">
{accordionData.map(({ title, content }) => (
  <Accordion key={Math.random()} title={title} content={content} />
))}

    </div>
  );
};

export default App;