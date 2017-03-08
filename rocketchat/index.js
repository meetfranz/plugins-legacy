module.exports = (Franz) => {
  class RocketChat extends Franz {
    validateServer(URL) {
      const api = `${URL}/api/info`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          if (typeof(resp) === 'object' && ('build' in resp || 'version' in resp)) {
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
