import React from 'react'
import CTA from 'components/cta'

import pick from 'languages'

import { t_a_center, h3, white } from 'css/cascade'

const title_text = pick({
  fr:<span>Changez de point de vue.</span>,
  en:<span>Change your perspective.</span>
});

const grid_style = {
  padding: '2.5em'
};

const title_style = h3
  .add(t_a_center)
  .add(white)
  .style();

const cta_style = t_a_center.add({
  padding: '0.5em'
}).style();


export default function Recall(props) {
  const version_index = props.version_index;
  const setVersionIndex = props.setVersionIndex;
  const platform_index = props.platform_index;
  const setPlatformIndex = props.setPlatformIndex;

  return (
    <div className='grid-x' style={grid_style}>
      <div className='cell small-12'>
        <div style={title_style}>
          {title_text}
        </div>
      </div>
      <div className='cell small-12'>
        <div style={cta_style}>
          <CTA
            version_index={version_index}
            setVersionIndex={setVersionIndex}
            platform_index={platform_index}
            setPlatformIndex={setPlatformIndex}
          />
        </div>
      </div>
    </div>
  )
}