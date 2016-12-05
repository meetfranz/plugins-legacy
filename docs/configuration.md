# Integration Config

A [Franz](http://meetfranz.com) integration plugin is a node module. In order to learn more about node modules and their configuration check the official [Node.js documentation](https://nodejs.org/api/modules.html) / [npm package.json documentation](https://docs.npmjs.com/files/package.json).

## Table of Contents
* [Config flags](#user-content-config-flags)
* [Examples](#user-content-examples)

## Config flags

`string` **name**<br />
Unique identifier name of the plugin. The name of the plugin folder should also be this name.

`string` **version**<br />
Version number. Will be used for auto updating the integrations. The version number must be in the following format: `1.0.0`.

`string` **description**<br />
Short description about your integration. Will be displayed in a future release.

`string` **main**<br />
The plugins main entry point. In our case `index.js`.

`string` **author**<br />
Author of the integration. Will be displayed in a future release.

`string` **license**<br />
The license of the integration. We prefer MIT, but here is a list of all the available SPDX licenses http://spdx.org/licenses/

`object` **config**<br />
This is the Franz specific integration config.

* `string` **serviceURL**<br/>
Defines the URL that should be loaded into the Franz webview.
<br /><br />
If you want to load a simple URL like `https://www.messenger.com`, you can simply define it via the `serviceURL` parameter. If your service URL is team based, e.g. Slack or HipChat you can use `https://{teamID}.slack.com`.
<br /><br />
If your service works with custom URLs, just leave this empty.
<br /><br />
**Examples**
```json
{
    "serviceURL": "https://www.messenger.com"
}
```
<br />
```json
{
    "serviceURL": "https://{teamID}.slack.com"
}
```
* `string` **serviceName**<br/>
Display name of the service.
* `array` **popup**<br/>
Array with regular expressions to open external links in a popup instead of a new browser window. This is used for Slack, Messenger or Yodel calls.
<br /><br />
**Examples**
```json
  {
    "popup": [
      "^https:\/\/([a-zA-Z0-9\\-]*).slack.com\/call\/([^~])*",
      "^https:\/\/slack-redir.net\/link\\?url=https:\/\/yodel.io\/c\/([^~])*"
    ]
  }
```
* `boolean` **hasTeamID**<br />
Is this a team based service? If true, the interface to add the service will require a team identifier. e.g. `[teamID]`.slack.com
* `boolean` **hasNotificationSound**<br />
Some services provide their own notification sound. In order to avoid multiple sounds when the user receives a message set this to `true`. If the service has no built in notification sound set this to `false`.
* `boolean` **hasIndirectMessages**<br />
Services like Slack or HipChat have direct messages e.g. a mention or message to every user in a channel (@channel) and indirect messages e.g. general discussion in a channel. If this flag is set to `true`, the user can enable/disable if there should be a badge for indirect messages.
* `string` **message**<br />
Info message that will be displayed in the add/edit service interface.
* `object` **wording**<br />
In some cases, e.g. team based servies, you need custom wording in the add/edit service interface that differs from the `serviceName`
  * `string` **url**<br />
  e.g. slack.com or hipchat.com
  * `string` **team**<br />
  e.g. Slack, HipChat, ... is followed "Team"
* `boolean` **webviewOptions**<br />
The webview wil be generated with the given webviewOptions. **Only use this if you absolutely know what you are doing.** A list of all available tags can be found at the [electron webview documentation](http://electron.atom.io/docs/api/web-view-tag/#tag-attributes)<br /><br />
**Examples**
```json
{
    "webviewOptions": {
      "disablewebsecurity": ""
    }
}
```
* `object` **openDevTools**<br />
Opens the webviews dev tools. This is very useful when developing an integration but should never be set to true in production.


## Examples
### Slack configuration
```json
{
  "name": "slack",
  "version": "1.0.1",
  "description": "A messaging app for teams",
  "main": "index.js",
  "author": "Stefan Malzner <stefan@meetfranz.com>",
  "license": "MIT",
  "config": {
    "serviceURL": "http://{teamID}.slack.com",
    "serviceName": "Slack",
    "popup": [
      "^https:\/\/([a-zA-Z0-9\\-]*).slack.com\/call\/([^~])*",
      "^https:\/\/slack-redir.net\/link\\?url=https:\/\/yodel.io\/c\/([^~])*"
    ],
    "hasTeamID": true,
    "hasNotificationSound": true,
    "hasIndirectMessages": true,
    "wording": {
        "url": "slack.com",
        "team": "Slack"
    },
    "webviewOptions": {
      "disablewebsecurity": ""
    },
    "openDevTools": false
  }
}
```

### Messenger configuration
```json
{
  "name": "messenger",
  "version": "1.0.0",
  "description": "Facebook Messenger",
  "main": "index.js",
  "author": "Stefan Malzner <stefan@meetfranz.com>",
  "license": "MIT",
  "config": {
    "serviceURL": "http://messenger.com",
    "serviceName": "Messenger",
    "message": "This is a random info text that is shown when adding/editing a service",
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
