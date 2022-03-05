# sergeiliski.com

Personal website of Sergei Liski

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new <site-name> https://github.com/sergeiliski.com/sergeiliski.com
```

Then you can run it by:

```sh
cd gatsby-example-site
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'sergeiliski.com',
  ...
  firstName: 'Sergei',
  lastName: 'Liski',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/sergeiliski',
    }
    ...
  ],
};

```
#### Changing Theme Colour

To change theme colour, change `$primary` variable in `src/assets/sass/_variables.scss`.


### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://sergeiliski.com/somePath/`. If you are hosting it as root site, i.e, `https://sergeiliski.com/` , remove the pathPrefix configuration.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

