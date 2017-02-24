module.exports = (Franz) => {
  class Intercom extends Franz {
    validateServer(URL) {
      const api = `${URL}`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          if (/intercom/i.test(resp)) {
            resolve();
          } else {
            reject();
          }
        }).fail(reject);
      });
    }
  }

  return Intercom;
};
