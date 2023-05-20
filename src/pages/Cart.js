import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { cartItemsState } from '../services/CartContext';

const Cart = () => {
  const cartItems = useRecoilValue(cartItemsState);
  const setCartItems = useSetRecoilState(cartItemsState);
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState({
    fullName: '',
    postalCode: '',
    road: '',
    number: '',
    complement: '',
  });

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFinishButtonClick = () => {
    // Handle finish button click logic here
    console.log('Finish button clicked');
    console.log('Payment method:', paymentMethod);
    console.log('Address:', address);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="grid grid-cols-1 gap-8 mb-8">
            {cartItems.map((item) => (
              <li key={item.id} className="border rounded-lg">
                <div className="flex">
                  <img src={item.image} alt={item.name} className="w-32 h-auto" />
                  <div className="flex-grow p-4">
                    <p className="text-base font-bold mb-2">{item.name}</p>
                    <p className="text-gray-500 text-sm">Price: ${item.price}</p>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="border rounded-lg p-4 mb-8">
            <p className="text-lg font-bold mb-4">
              Total Price: <span className="text-blue-500">${totalPrice.toFixed(2)}</span>
            </p>
            <div className="flex items-center flex-col md:flex-row mb-4">
              <label htmlFor="paymentMethod" className="text-base font-bold mr-2 mb-2">
                Payment Method:
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="border rounded-md py-2 px-4 mb-2 md:mb-0"
              >
                <option value="">Select Payment Method</option>
                <option value="pix">PIX</option>
                <option value="money">Money</option>
                <option value="creditCard">Credit Card</option>
              </select>
              {paymentMethod === 'creditCard' && (
                <p className="text-sm text-gray-500 mb-2 ml-4">
                  O pagamento será realizado no momento da entrega por meio de uma máquina de cartão de crédito!
                </p>
              )}
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <label htmlFor="fullName" className="text-base font-bold mr-2 mb-2">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={address.fullName}
                onChange={handleAddressChange}
                className="border rounded-md py-2 px-4 mb-2 md:mb-0 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <label htmlFor="postalCode" className="text-base font-bold mr-2 mb-2">
                Postal Code:
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={address.postalCode}
                onChange={handleAddressChange}
                className="border rounded-md py-2 px-4 mb-2 md:mb-0 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <label htmlFor="road" className="text-base font-bold mr-2 mb-2">
                Road:
              </label>
              <input
                type="text"
                id="road"
                name="road"
                value={address.road}
                onChange={handleAddressChange}
                className="border rounded-md py-2 px-4 mb-2 md:mb-0 w-full" 
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <label htmlFor="number" className="text-base font-bold mr-2 mb-2">
                Number:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={address.number}
                onChange={handleAddressChange}
                className="border rounded-md py-2 px-4 mb-2 md:mb-0 w-full"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <label htmlFor="complement" className="text-base font-bold mr-2 mb-2">
                Complement (Optional):
              </label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={address.complement}
                onChange={handleAddressChange}
                className="border rounded-md py-2 px-4 mb-2 md:mb-0 w-full"
              />
            </div>
            <button
              onClick={handleFinishButtonClick}
              className="px-8 py-3 rounded-md bg-blue-500 text-white font-semibold w-full"
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
