import React from 'react'
import CTA from 'components/cta'

import pick from 'languages'

import { t_a_center, h1, h4 } from 'css/cascade'

const sub_title_text = pick({
  fr:<span>Vos fichiers et dossiers, comme vous ne les avez jamais vus.</span>,
  en:<span>Your files and folders, as you've never seen them.</span>
});

const title_style = h1.add(t_a_center).style();

const sub_title_style = h4.add(t_a_center).style();

const cta_style = t_a_center.add({
  padding: '0.5em'
}).style();

export default class HeroHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props;

    const version_index = props.version_index;
    const setVersionIndex = props.setVersionIndex;
    const platform_index = props.platform_index;
    const setPlatformIndex = props.setPlatformIndex;

    return (
      <div className='grid-x'>
        <div className='cell small-12'>
          <div style={title_style}>
            archifiltre
          </div>
        </div>
        <div className='cell small-12'>
          <div style={sub_title_style}>
            {sub_title_text}
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
}
