const totalPrice = ({ price, discount, isInstallment, months }) => {
    return isInstallment ? (price - (price / 100 * discount)) / months : (price / 100 * discount);
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
