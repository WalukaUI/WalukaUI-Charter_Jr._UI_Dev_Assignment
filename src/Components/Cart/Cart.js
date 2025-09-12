function Cart({totalPrice}) {
    return <>
        <div>
        <h3>{totalPrice.toFixed(2)}</h3>
    </div>
    </>
}

export default Cart