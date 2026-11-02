let count = 0;
function addToCart() {
  count = count + 1;
  document.getElementById("cart-count").innerText = count;
  alert("Product added! Total items: " + count);
}
