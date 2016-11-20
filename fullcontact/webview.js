module.exports = (Franz, options) => {
  function getStatus() {
    // Search for activity count
    const elem = document.querySelector('#activity-nav-item span:first-child');
	const count = elem ? elem.innerHTML : 0;
	
    // double check if inner HTML was a number
	if(!isNaN(parseFloat(count)) && isFinite(count)){
      Franz.setBadge(count); 
	}  
  }
  
  Franz.loop(getStatus)
}