module.exports = (Franz) => {
  class Shout extends Franz {
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

  return Shout;
};
