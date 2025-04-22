import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-[#ecf5ad] bg-opacity-90 py-16 px-6 md:px-16 text-center relative">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
        Join Membership And Connect To Every Member.
      </h2>
      <p className="text-gray-700 mb-8">
        Subscribe To Our Newsletter To Be The First To Receive Any Information
        About Us
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter Your Email..."
          className="w-full md:w-2/3 px-6 py-3 rounded-full outline-none text-gray-800 bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/black-white-macro-yummy-strawberries-background_53876-16629.jpg')`,
        }}
      ></div>
    </div>
  );
}
