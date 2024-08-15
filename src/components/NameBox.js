import React, { PureComponent } from 'react';
import styled from 'styled-components';

const greetLine = "Hey, I'm Turcan";
const descrLine = "# I'm a software engineer";

const TagLine = styled.h3`
  min-height: 2em;
  font-size: medium;
  font-weight: 600;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 375ms ease-out;
  @media (max-width: 767px) {
    min-height: 4.875em;
  }
`;

class NameBox extends PureComponent {
  state = {
    tags: [
      "I'm currently developing financial products @ RibbonHome",
      'Built cool stuff like bioinformatics tools, and laboratory management software',
      'Ask me about my dogs Falafel, and Tantuni',
      'I preach BDD, but usually skip that first "red"',
      'I used to be a radiochemist',
      'In radiation work, containment is everything',
      'Containment is also how I like to start developing environments',
      'I live for rapid feedback loops',
      'I write procedures for chemical syntheses, computation, and baking',
      'I make a banana bread so mean it bullied me in high school',
      'My sourdough is okay',
      'I maintain my sanity by satisfying tests and walking with my dogs',
      "I'm passionate about radiation chemistry and molecular imaging",
      'I once contaminanted my favorite boots with radioactive waste',
      'It was a year before I could safely wear them again',
      'I really liked those shoes :(',
    ],
    currentIdx: 0,
    showTag: true,
  };

  componentDidMount = () => {
    this.tagInterval = setInterval(this.cycleTags, 5000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.animationTimer);
    clearInterval(this.tagInterval);
  };

  setShowTag = (bool) => {
    this.setState({ showTag: bool });
  };

  changeTag = () => {
    const { currentIdx, tags } = this.state;
    this.setState({
      currentIdx: currentIdx === tags.length - 1 ? 0 : currentIdx + 1,
    });
  };

  cycleTags = () => {
    this.setShowTag(false);
    clearTimeout(this.animationTimer);
    this.animationTimer = setTimeout(() => {
      this.changeTag();
      this.setShowTag(true);
    }, 500);
  };

  render() {
    const { tags, currentIdx, showTag } = this.state;
    return (
      <div className="link-list">
        <h1>{greetLine}</h1>
        <h2>{descrLine}</h2>
        <TagLine show={showTag}>{tags[currentIdx]}</TagLine>
      </div>
    );
  }
}

export default NameBox;
