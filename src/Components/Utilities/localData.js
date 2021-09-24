// Set Data in Local Storage:
// const addDataInLocalStorage = id => {
//         const exists = localStorage.getItem('shopping_cart');
//         let shopping_cart = {};
//         if (!exists) {
//                 shopping_cart[id] = 1;
//         }
//         else {
//                 shopping_cart = JSON.parse(exists);
//                 if (shopping_cart[id]) {
//                         const newCount = shopping_cart[id] + 1;
//                         shopping_cart[id] = newCount;
//                 }
//                 else {
//                         shopping_cart[id] = 1;
//                 }
//         }
//         localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
// }
const addDataInLocalStorage = id => {
        const exists = localStorage.getItem('cart');
        let cart = {};
        if (!exists) {
                cart[id] = 1;
        }
        else {
                cart = JSON.parse(exists);
                if (cart[id]) {
                        const newCount = cart[id] + 1;
                        cart[id] = newCount;
                }
                else {
                        cart[id] = 1;
                }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
}
export { addDataInLocalStorage };