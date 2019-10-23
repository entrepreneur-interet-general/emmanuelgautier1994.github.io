import React from 'react'

import HeroHeader from 'components/hero-header'
import Features from 'components/features'
import ChangeLog from 'components/changelog'
import Recall from 'components/recall'
import Footer from 'components/footer'

import { black_gradient } from 'css/cascade'

import scrollHashIntoView from 'scroll-hash-into-view'

const foldersBackStyle = {
  background: 'url("imgs/stock-folders.jpg") no-repeat center'
};

const greyBackStyle = {
  backgroundColor: '#424242'
};

const bgStyle = black_gradient.style();

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      version_index:0,
      platform_index:0,
    };

    this.setVersionIndex = this.setVersionIndex.bind(this);
    this.setPlatformIndex = this.setPlatformIndex.bind(this);
  }

  setVersionIndex(version_index) {
    this.setState({
      version_index,
    })
  }

  setPlatformIndex(platform_index) {
    this.setState({
      platform_index,
    })
  }

  componentDidMount() {
    const timeout = 10;
    setTimeout(scrollHashIntoView, timeout)
  }

  render() {
    const { version_index, platform_index } = this.state;

    const setVersionIndex = this.setVersionIndex;
    const setPlatformIndex = this.setPlatformIndex;

    return (
      <div>
        <div className='grid-x grid-padding-x grid-padding-y'>
          <div className='cell small-12'>
            <HeroHeader
              version_index={version_index}
              setVersionIndex={setVersionIndex}
              platform_index={platform_index}
              setPlatformIndex={setPlatformIndex}
            />
          </div>
          <div className='cell small-12'>
            <Features/>
          </div>
        </div>

        <div className='grid-x'>
          <div className='cell' style={foldersBackStyle}>
            <div style={bgStyle}>
              <div className='grid-x grid-padding-x grid-padding-y'>
                <div className='cell'>
                  <Recall
                    version_index={version_index}
                    setVersionIndex={setVersionIndex}
                    platform_index={platform_index}
                    setPlatformIndex={setPlatformIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid-x grid-padding-x grid-padding-y'>
          <div className='cell'>
            <ChangeLog/>
          </div>
        </div>

        <div className='grid-x grid-padding-x grid-padding-y'>
          <div className='cell small-12' style={greyBackStyle}>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}