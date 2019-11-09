/* Map exercies
 *
 */
function capitalizeNames(arr) {
  return arr.map(capitalName => capitalName.toUpperCase());
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// Get list of friends
let html = document.querySelectorAll(".ruUserBox");

html.forEach(friendRequest => {
  let name = friendRequest.getElementsByTagName("a").title;
});


