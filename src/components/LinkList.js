import React from 'react';

const linkItems = [
  {
    key: 'email',
    flavorText: 'shoot me an email at ',
    link: 'ayhanberfin1@gmail.com',
    linkText: 'ayhanberfin1@gmail.com',
  },
  // {
  //   key: 'github',
  //   flavorText: 'check out my code on ',
  //   link: 'https://github.com/htcicek',
  //   linkText: 'github',
  // },
  {
    key: 'linkedin',
    flavorText: 'connect with me on ',
    link: 'https://www.linkedin.com/in/berfin-ayhan/',
    linkText: 'linkedin',
  },
  // {
  //   key: 'resume',
  //   flavorText: 'sneak a peak at my ',
  //   link: `${process.env.PUBLIC_URL}/turcan_cicek_resume.pdf`,
  //   linkText: 'resume',
  // },
];

const linkRender = (linkArr) => {
  return linkArr.map((linkObj) => {
    return (
      <span key={linkObj.key} className="link-item">
        {linkObj.flavorText}
        <a target="_blank" rel="noopener noreferrer" href={linkObj.link}>
          {linkObj.linkText}
        </a>
      </span>
    );
  });
};

const LinkList = () => {
  return <div className="link-list">{linkRender(linkItems)}</div>;
};

export default LinkList;
