import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      
      <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
    });

    return responseHTML;
  }
}

export default Sidebar;
