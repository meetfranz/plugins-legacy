# Franz Integration Documentation / Overview

A Franz plugin is basically nothing else than a node module and is currently initialized on `dom-ready`. You can use and install any node module as a dependency and access all of the [electron](http://electron.atom.io) modules as well.

## Table of Contents
* [Installation](#user-content-installation)
* [Plugin structure](#user-content-plugin-structure)
* [Configuration (package.json)](#user-content-packagejson)
* [Backend (index.js)](#user-content-indexjs)
* [Frontend (webview.js)](#user-content-webviewjs)
* [Icons](#user-content-icons)
* [Roadmap](#user-content-roadmap)

## Installation
1. To install a new integration, download the integration folder e.g `oratio`.
2. Open the Franz Plugins folder on your machine:
  * Mac: `~Library/Application Support/Franz/Plugins/`
  * Windows: `%appdata%/Franz/Plugins`
  * Linux: `~/.config/Franz/Plugins`
  * _Alternatively: Go to your Franz settings page, scroll down to the bottom and you will see an option to "Open the Franz plugin directory"_
3. Copy the `oratio` folder into the plugins directory
4. Restart Franz

## Plugin structure
Every plugin needs a specific file structure in order to be detected as a Franz plugin

* Plugins/`[NAME]`/
  * icon.svg
  * icon.png
  * index.js
  * package.json
  * webview.js

### package.json
The package.json is structured like any other node module and allows to completely configure the service.

```json
{
  "name": "oratio",
  "version": "1.0.0",
  "description": "oratio",
  "main": "index.js",
  "author": "David Pichsenmeister <david@orat.io>",
  "license": "MIT",
  "config": {
    "serviceURL": "https://orat.io",
    "serviceName": "oratio - Messengers for Business",
    "message": "We enable businesses to offer customer service through mobile messengers.",
    "popup": [],
    "hasNotificationSound": true,
    "hasIndirectMessages": false,
    "hasTeamID": false,
    "customURL": false,
    "hostedOnly": false,
    "webviewOptions": {
      "disablewebsecurity": ""
    },
    "openDevTools": false
  }
}
```

To get more information about all the provided configuration flags, check the [config docs](configuration.md).


### index.js
This is your "backend" code. Right now the options are very limited and most of the services don't need a custom handling here. If your service is relatively straight forward and has a static URL eg. _messenger.com_, _`[TEAMID]`.slack.com_ or _web.skype.com_ all you need to do to return the Franz Class:

```js
// default integration (e.g messenger.com, ...)
module.exports = Franz => Franz;
```

If your service can be hosted on custom servers, you can validate the given URL to detect if it's your server and not e.g. google.com. To enable validation you can override the function `validateServer`
```js
// RocketChat integration
module.exports = (Franz) => {
  class RocketChat extends Franz {
    validateServer(URL) {
      const api = `${URL}/api/info`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          if (typeof(resp) === 'object' && 'build' in resp) {
            resolve();
          } else {
            reject();
          }
        }).fail(reject);
      });
    }
  }

  return RocketChat;
};
```

`validateServer` needs to return a [`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), otherwise validation will fail.

### webview.js
The webview.js is the actual script that will be loaded into the webview. Here you can do whatever you want to do in order perfectly integrate the service into Franz. For convenience, we have provided a very simple set of functions to set unread message badges (`Franz.setBadge()`) and inject CSS files (`Franz.injectCSS()`).


```js
// orat.io integration
module.exports = (Franz, options) => {
  function getMessages() {
    const count = {};
    const FranzData = document.querySelector('#FranzMessages').dataset;
    if (FranzData) {
      count.count = FranzData.direct;
      count.count_indirect = FranzData.indirect;
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
```

To get more information about the provided functions, check the [API docs](frontend_api.md).

### Icons
In order to show every service icon crystal clear within the Franz UI, we require a .svg and .png in 1024x1024px.

## Roadmap
* Add auto update to keep integrations up to date
* Add marketplace for integrations
* Initialize integration right at the start instead of `dom-ready`
* Add i18n to integrations
