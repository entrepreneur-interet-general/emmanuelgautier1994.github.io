import React from 'react'

import Select from 'components/select'

import pick from 'languages'

import versions from 'versions'
import platforms from 'platforms'

import Bubble from 'components/bubble'

const button_style = {
  background: 'rgb(33, 150, 243)',
  color: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  borderRadius: '0.2em',
  letterSpacing: '0.1em',
  padding: '0.6em 1em',
  fontWeight: '500',
  fontSize: '1em',
  margin: '0',
};

const select_style = {
  width:'auto',
  fontSize:'0.8em',
  margin:'0',
  marginRight: '0.5em',
  height:'auto',
};

const ctaText = () => {
  return pick({
    fr:<span>DÉCOUVREZ L'APPLICATION</span>,
    en:<span>DISCOVER THE APP</span>
  })
};

export default function CTA(props) {
  const version_index = props.version_index;
  const setVersionIndex = props.setVersionIndex;
  const onChangeVersion = (event) => {
    const version_index = event.target.value;
    setVersionIndex(version_index)
  };

  const versions_text = versions.map(a=>`v${a.number} : ${a.name}`);

  const version = versions[version_index];
  const number = version.number;
  let url = version.url;

  const label = ctaText(version_index);

  let platform_index = props.platform_index;
  const setPlatformIndex = props.setPlatformIndex;
  const onChangePlatform = (event) => {
    const platform_index = event.target.value;
    setPlatformIndex(platform_index)
  };

  let platforms_text = platforms.map(a=>a.name);
  let platform_disabled = false;
  let url_end = platforms[platform_index].url_end;

  if (number < 9) {
    // app is online
    platform_index = 0;
    platforms_text = ['Online'].concat(platforms_text);
    platform_disabled = true
  } else {
    // app is local
    if (number === 13) url_end = url_end.split('/')[1];
    url = url+url_end
  }

  return (
    <div className='grid-x'>
      <div className='cell small-12' style={{paddingBottom:'0.5em'}}>
        <a
          className={'button'}
          style={button_style}
          href={url}
        >
          {label}
        </a>
      </div>
      <div className='cell small-12'>
        <div className='grid-x align-center align-middle'>
          <div className='cell shrink'>
            <Select
              index={version_index}
              array={versions_text}
              onChange={onChangeVersion}
              style={select_style}
            />
          </div>
          <div className='cell shrink'>
            <Select
              index={platform_index}
              array={platforms_text}
              onChange={onChangePlatform}
              style={select_style}
              disabled={platform_disabled}
            />
          </div>
          <div className='cell shrink'>
            <Bubble/>
          </div>
        </div>
      </div>
    </div>
  )
}