module.exports = (Franz) => {
  class VectorChat extends Franz {
    validateServer(URL) {
      const api = `${URL}/config.json`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
            resolve();
        }).fail(reject);
      });
    }
  }

  return VectorChat;
};
