// Mastodon integration
module.exports = (Franz) => {
  class Mastodon extends Franz {
    validateServer(URL) {
      const api = `${URL}/about/more`;
      return new Promise((resolve, reject) => {
        $.get(api, (resp) => {
          // quick validation to check to the url is ok and contains a link to the repo
          if (/github\.com\/tootsuite\/mastodon/i.test(resp)) {
            resolve();
          } else {
            reject();
          }
        }).fail(reject);
      });
    }
  }

  return Mastodon;
};
