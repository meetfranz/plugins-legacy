# Backend API

Provides a set of helper functions to integrate the service into [Franz](http://meetfranz.com).

## Franz Backend Class Methods
* [validateServer](#validateserver)

### validateServer(URL)
Validate if the given URL is a valid service instance.  

#### Arguments
1. `string` URL

#### Returns
[`Promise`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Usage

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
