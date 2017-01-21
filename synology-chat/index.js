module.exports = (Franz) => {
  class SynologyChat extends Franz {
    validateServer(URL) {
      const api = `${URL}`;
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

  return SynologyChat;
};
