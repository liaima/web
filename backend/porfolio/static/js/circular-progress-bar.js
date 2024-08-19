class CircularProgressBar extends HTMLElement{
  attrs = {
    color: '#000',
    stroke_color: '#AAA',
    bg_color: 'rgba(0,0,0,0.4)',
    stroke: '20',
    value: '0',
    max_value : '100',
    percentage: '0',
    init_value: '0',
    width: '150',
    shadow_width: '3',
    title: '',
    transition: '.45',
    show_percentage: 'true',
    show_title: 'true',
    show_values: 'true',
  };

  constructor( ){
    super( );
    this.attachShadow( { mode: 'open' } );
  }

  static get observedAttributes() {
    return ['value'];
  }

  setValue(newValue) {
    this.setAttribute('value', newValue);
  }

  setPercentage(){
    this.attrs.percentage = Math.round((parseInt(this.attrs.value) * 100) / parseInt(this.attrs.max_value));
  }

  connectedCallback( ){
    this.getAttributes( );
    this.setPercentage();
    this.style( );
    this.render( );
  }

  getAttributes( ){
    Array.from(this.attributes).map( a =>{
      this.attrs[a.name] = a.value === '' ? true : a.value;
    } );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.attrs.init_value = this.attrs.percentage || '0';
    this.connectedCallback()
  }

  style( ){
    this.shadowRoot.innerHTML = `
      <style>
        @keyframes fill{
          to{
            stroke-dasharray: ${ this.attrs.percentage } 100;
          }
        }

        div{
          position:relative;
          width: ${parseInt(this.attrs.width) + parseInt(this.attrs.shadow_width) * 5}px;
        }
        div.text{
          position: absolute;
          top: 0%;
          left: 0%;
          bottom: 0%;
          right: 0%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: ${parseInt(this.attrs.width)/7}px;
          font-family: 'Poppins', sans-serif, Arial;
        }
        h4.title{
          margin: 0;
          font-size: ${parseInt(this.attrs.width)/8}px;
          font-weight: 800;
          text-transform: uppercase;
          color: ${this.attrs.title_color || this.attrs.color}
        }
        h3.percentage{
          font-size: 1.3em;
        }
        h3 span{
          margin: 0;
          font-size: 0.65em;
          font-weight: 400;
        }
        h3, h4{
          margin: 0;
          color: white;
        }
        circle.shadow {
          -webkit-filter: drop-shadow( ${this.attrs.shadow_width}px ${this.attrs.shadow_width}px ${this.attrs.shadow_width}px rgba(0, 0, 0, .7));
          filter: drop-shadow( ${this.attrs.shadow_width}px ${this.attrs.shadow_width}px ${this.attrs.shadow_width}px rgba(0, 0, 0, .7));
          /* Similar syntax to box-shadow */
        }
        circle{
          fill: ${ this.attrs.bg_color };
          stroke-width: ${ this.attrs.stroke };
          transform: rotate(-90deg);
          transform-origin: 50%;
          stroke-dasharray: 100 100;
          stroke: ${ this.attrs.stroke_color };
        }
        circle:nth-child(2){ 
          fill: none;
          stroke: ${ this.attrs.color };
          stroke-dasharray: ${this.attrs.init_value} 100;
          animation: fill ${this.attrs.transition}s linear forwards;
        }
      </style>
    `;
  }

  render( ){
    const _w = parseInt(this.attrs.width);
    const _s = this.attrs.stroke;
    const _t = this.attrs.title;
    const _v = this.attrs.value;
    const _mv = this.attrs.max_value;
    const _p = this.attrs.percentage;
    const _sh = parseInt(this.attrs.shadow_width) * 5;
    let text = '';
    if(this.attrs.show_values.toLowerCase() === "true"){
      text += `<h4>${ _v }/${ _mv }</h4>`
    }   
    if(this.attrs.show_percentage.toLowerCase() === "true"){
      text += `<h3 class="percentage">${ _p }<span>%</span></h3>`
    }
    if(this.attrs.show_title.toLowerCase() === "true"){
      text += `<h4 class="title">${ _t }</h4>`
    }
    this.shadowRoot.innerHTML += `
     <div>
       <svg width="${ _w + _sh }" height="${ _w + _sh }">
         <circle r="${ ( _w - _s ) / 2 }" cx="50%" cy="50%" pathlength="100" class="shadow" />
         <circle r="${ ( _w - _s ) / 2 }" cx="50%" cy="50%" pathlength="100" />
       </svg>
       <div class="text">
         ${ text } 
       </div>
     </div>
     `
  }
}

customElements.define('circular-progress-bar', CircularProgressBar );
