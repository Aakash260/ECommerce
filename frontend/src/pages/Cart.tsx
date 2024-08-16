import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";
const cartItem = [
  {
    productId:"skvdn",
    photo:"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
    name:"macbook",
    quantity:4,
    stock:45,
    price:80000
  }
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);

const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 100;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
      return () => {
        clearTimeout(timeOutId);
        setIsValidCouponCode(false);
      };
    }, 1000);
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
{ cartItem.length>0? (cartItem.map((i,ind)=>{
 return <CartItems key={ind} cartItem={i}/>
}))
: <h1> No Items Added</h1>
}

      </main>

      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount : <em> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />
            </span>
          ))}


{
  cartItem.length>0 && <Link to="/shipping">Checkout</Link>
}

      </aside>
    </div>
  );
};

export default Cart;
