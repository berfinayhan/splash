# splash

## To make updates

### carousel

edit files in `src/components/NameBox.js`
```js
class NameBox extends PureComponent {
  state = {
    tags: [
      "I'm currently designing freelance @ Gnar", // edit these, add more strings
      'Ask me about my dogs Falafel, and Tantuni',
    ],
    currentIdx: 0,
    showTag: true,
  };
```

### links
edit files in `src/components/LinkList.js`

```js
const linkItems = [
  {
    key: 'email',
    flavorText: 'shoot me an email at ',
    link: 'ayhanberfin1@gmail.com',
    linkText: 'ayhanberfin1@gmail.com',
  },
  {
    key: 'linkedin',
    flavorText: 'connect with me on ',
    link: 'https://www.linkedin.com/in/berfin-ayhan/',
    linkText: 'linkedin',
  },
    {
    key: 'new link',
    flavorText: 'check out my link on ', // the prepended characters of the link
    link: 'https://example.com',
    linkText: 'link', // the text the link is embedded in
  },
];
```

### Deploy
`npm run deploy`
go to pages, enter in berfinayhan.com on custom dns