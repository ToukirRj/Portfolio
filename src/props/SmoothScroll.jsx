import React from 'react';

class SmoothScrollComponent extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.scrollToTop}>Scroll to Top</button>
      </div>
    );
  }
}

export default SmoothScrollComponent;