import React from 'react'

import pick from 'languages'

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      mouse_over: false,
    }
  }

  onMouseEnter() {
    this.setState({
      mouse_over:true,
    })
  }

  onMouseLeave() {
    this.setState({
      mouse_over:false,
    })
  }

  render() {
    const state = this.state;
    const mouse_over = state.mouse_over;

    const label = '?';

    const sub_label = pick({
      en:(
        <div style={{textAlign:'left'}}>
          <div style={{fontSize:'1.4em',paddingBottom:'0.2em'}}>Recommended system :</div>
          <ul style={{marginBottom:0}}>
            <li>64 bit operating systems</li>
            <li>8 Gb of RAM</li>
            <li>1 swap partition</li>
            <li>No process memory limit</li>
          </ul>
          <div style={{fontSize:'0.8em',paddingTop:'1em'}}>
            Since version 9, Icicle is a local app, simply download the executable and double click on it, no need to instal it!
          </div>
        </div>
      ),
      fr:(
        <div style={{textAlign:'left'}}>
          <div style={{fontSize:'1.4em',paddingBottom:'0.2em'}}>Systéme recommandé :</div>
          <ul style={{marginBottom:0}}>
            <li>Systèmes d'exploitation 64 bits</li>
            <li>8 Go de RAM</li>
            <li>1 partition swap</li>
            <li>Pas de limite de mémoire de processus</li>
          </ul>
          <br/>
          <div style={{fontSize:'0.8em',paddingTop:'1em'}}>
            Depuis la version 9, Icicle est une application locale. Téléchargez simplement l’exécutable et double-cliquez dessus, inutile de l’installer !
          </div>
        </div>
      ),
    });

    const width = 18;
    const color = '#bfd3da';
    const border_color = '#989898';

    const style = {
      position:'relative',
      backgroundColor:color,
      width:'1.4em',
      borderRadius:'1em',
      border:`0.1em solid ${border_color}`,
    };

    const sub_style = {
      display:'none',
      position:'absolute',
      top:'100%',
      left:`calc(50% - ${width/2}em)`,
      width:`${width}em`,
      paddingTop:'0.2em',
      zIndex: 3,
    };

    const sub_sub_style = {
      backgroundColor:color,
      padding:'0.7em',
      wordWrap:'break-word',
      boxShadow:'-0.2em 0.2em 0.1em #525252',
      borderRadius:'0.2em',
      border:`0.1em solid ${border_color}`,
    };

    const sub_arrow_style = {
      width: 0,
      height: 0,
      borderLeft: '1em solid transparent',
      borderRight: '1em solid transparent',
      borderBottom: `0.5em solid ${border_color}`,
    };

    if (mouse_over) {
      delete sub_style.display
    }

    return (
      <div style={style}>
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {label}
        </div>
        <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={sub_style}>
          <div className='grid-x align-center'>
            <div className='cell shrink'>
              <div style={sub_arrow_style}>
              </div>
            </div>
          </div>

          <div className='grid-x align-center'>
            <div className='cell'>
              <div style={sub_sub_style}>
                {sub_label}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
