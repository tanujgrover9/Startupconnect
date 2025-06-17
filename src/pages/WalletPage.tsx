
const WalletPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-50 to-orange-100 px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pay with Wallet</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4 animate-fade-in">
        <input type="tel" placeholder="Mobile Number" className="w-full border px-4 py-2 rounded-lg" required />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-lg" required />
        <select className="w-full border px-4 py-2 rounded-lg" required>
          <option value="">Select Wallet</option>
          <option>Paytm</option>
          <option>PhonePe</option>
          <option>Amazon Pay</option>
        </select>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">Pay Securely</button>
      </form>
    </div>
  );
};

export default WalletPage;