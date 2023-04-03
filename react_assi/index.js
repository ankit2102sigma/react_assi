'use strict'

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick() {
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return "You have liked" ;
    }

    return e( 'button',{onClick: ()=>this.setState({liked:true})},'Like'
    );
  }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));