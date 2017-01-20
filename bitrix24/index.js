module.exports = Franz => {
  class BitrixChat extends Franz {
    validateServer(URL) {
      const api = `${URL}/crm/`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
            resolve();
        }).fail(reject);
      });
    }
  }

  return BitrixChat;
};
