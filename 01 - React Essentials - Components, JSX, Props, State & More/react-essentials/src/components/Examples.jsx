import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';


const Examples = () => {
const [selectedTopic, setSelectedTopic] = useState('components');
 
    function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("Selected Topic:", selectedTopic);
    } 
 


  let tabContent = <p>Please select a Topic.</p> 

  if(selectedTopic) 
  {
    tabContent = (
       <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>
           <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
     </div>
    )
  }


  return (
      <Section title="Examples" id='examples' className="examples-section">
          <Tabs
           buttons={
              <>
              <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={
                () =>handleSelect('components')
              }>
                Components
              </TabButton>
               <TabButton
                 isSelected={selectedTopic === 'jsx'}
               onClick={() => handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton
                 isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}>
                JSX
              </TabButton>

              <TabButton
                 isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}>
                Props
              </TabButton>

              <TabButton isSelected={selectedTopic === 'state'}
               onClick={() => handleSelect('state')}>
                State
              </TabButton>
            </>}>
               {tabContent}
          </Tabs>
        </Section>
  )
}

export default Examples