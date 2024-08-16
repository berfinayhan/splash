import React, { PureComponent } from 'react';
import styled from 'styled-components';

const greetLine = "Hey, I'm Berfin";
const descrLine = "# I'm a Product Designer";

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
      "I'm currently designing freelance @ The Gnar",
      'Ask me about my dogs Falafel and Tantuni',
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
