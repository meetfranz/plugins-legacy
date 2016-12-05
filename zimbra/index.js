module.exports = (Franz) => {
  class Zimbra extends Franz {
    validateServer(URL) {
      const api = `${URL}`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          if (/zimbra/i.test(resp)) {
            resolve();
          } else {
            reject();
          }
        }).fail(reject);
      });
    }
  }


  return Zimbra;
};
