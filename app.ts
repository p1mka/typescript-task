interface TotalPrice {
    price: number
    discount: number
    isInstallment : boolean
    months: number
}

const totalPrice =({ price, discount, isInstallment, months}:TotalPrice):number => {
    return isInstallment ? (price -(price/100*discount))/months : price -(price/100*discount)
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }) ;
console.log(price); // 6250
