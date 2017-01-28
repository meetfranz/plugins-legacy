module.exports = (Franz, options) => {
  const getUnreads = () => {

    // To付きメッセージ未読数とメッセージ総未読数のDOM要素を取得
    const directCounts = document.querySelector('#_chatToUnreadStatus');
    const totalCounts = document.querySelector('#_chatUnreadStatus');

    // ChatWork表示上の未読数を格納
    const directCountsNumber = directCounts.textContent;
    const totalCountsNumber = totalCounts.textContent;

    // 未読数の出し分けはstyle="display: hoge;"でされているので状態を取得
    const directCountsExistence = directCounts.style.display;
    const totalCountsExistence = totalCounts.style.display;

    // 上の取得したstyle属性(display)がnoneの場合はFranzに0を返す
    let directUnreads = (directCountsExistence === 'none') ? '0' : directCountsNumber;
    let indirectUnreads = (totalCountsExistence === 'none') ? '0' : totalCountsNumber;

    //　set franz Badge!!
    Franz.setBadge(directUnreads, indirectUnreads);
  }

  Franz.loop(getUnreads);
}
