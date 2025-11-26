import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";

const cart = {
    product: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 320,
            image: "https://picsum.photos/150?random=201",
        },
        {
            name: "Casual Sneakers",
            size: "42",
            color: "Black",
            price: 240,
            image: "https://picsum.photos/150?random=202",
        },
    ],
    totalPrice: 560,
};

const Checkout = () => {

    const navigate = useNavigate();

    const [checkoutId, setCheckoutId] = useState(null);

    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123);
    };

    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful", details);
        navigate("/order-confirmation");
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-5 px-6 tracking-tighter">
            {/* Left Section */}
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">Checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4">Contact Details</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 ">Email</label>
                        <input type="email" value="user@example.com"
                            className="w-full p-2 border rounded " disabled
                        />
                    </div>
                    <h3 className="text-lg mb-4 ">Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        firstName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        lastName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address</label>
                        <input type="text"
                            value={shippingAddress.address}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    address: e.target.value
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input type="text"
                                value={shippingAddress.city}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        city: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Postal Code</label>
                            <input type="text"
                                value={shippingAddress.postalCode}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        postalCode: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Country</label>
                        <input type="text"
                            value={shippingAddress.country}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    country: e.target.value
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone</label>
                        <input type="number"
                            value={shippingAddress.phone}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    phone: e.target.value
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (
                            <button type="submit" className="bg-black text-white w-full py-3 cursor-pointer rounded">Continue to Payment</button>
                        ) : (
                            <div>
                                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                                <PayPalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment Failed. Try again.")} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
            {/* Right Section */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">Order Summary</h2>
                <ul className="space-y-4 border-t py-4 mb-4">
                    {cart.product.map((product, index) => (
                        <li key={index} className="flex products-center gap-4 border-b py-4">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <p className="font-semibold">{product.name}</p>
                                <p className="text-sm text-gray-600">Size: {product.size}</p>
                                <p className="text-sm text-gray-600">Color: {product.color}</p>
                                <p className="font-medium">${product.price?.toLocaleString()}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>${cart.totalPrice?.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;