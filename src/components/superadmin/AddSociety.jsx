import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Hash,
  Home,
  User,
  Lock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const AddSociety = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    societyName: "",
    registrationNo: "",
    email: "",
    phone: "",
    wings: "",
    flats: "",
    city: "",
    state: "",
    address: "",

    headName: "",
    headEmail: "",
    headPhone: "",
    username: "",
    password: "",
  });

  const [created, setCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCreated(false);

    try {
      const response = await axios.post("http://localhost:5000/api/societies/register", formData);

      if (response.data?.success) {
        setCreated(true);
        setTimeout(() => {
          navigate("/admin-login", { state: { email: formData.headEmail, password: formData.password } });
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Unable to register society right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add New Society
        </h1>

        <p className="text-gray-500 mt-2">
          Register a new society and create Society Head Login.
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        {/* Society Name */}

        <div>
          <label className="font-medium mb-2 block">
            Society Name
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Building2 size={20} className="text-gray-400" />

            <input
              name="societyName"
              value={formData.societyName}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              placeholder="Dream House Society"
            />
          </div>
        </div>

        {/* Registration */}

        <div>
          <label className="font-medium mb-2 block">
            Registration Number
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Hash size={20} className="text-gray-400" />

            <input
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              placeholder="REG12345"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="font-medium mb-2 block">
            Society Email
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Mail size={20} className="text-gray-400" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <label className="font-medium mb-2 block">
            Phone
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Phone size={20} className="text-gray-400" />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Wings */}

        <div>
          <label className="font-medium mb-2 block">
            Total Wings
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Building2 size={20} className="text-gray-400" />

            <input
              type="number"
              name="wings"
              value={formData.wings}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Flats */}

        <div>
          <label className="font-medium mb-2 block">
            Total Flats
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Home size={20} className="text-gray-400" />

            <input
              type="number"
              name="flats"
              value={formData.flats}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* City */}

        <div>
          <label className="font-medium mb-2 block">
            City
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <MapPin size={20} className="text-gray-400" />

            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* State */}

        <div>
          <label className="font-medium mb-2 block">
            State
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <MapPin size={20} className="text-gray-400" />

            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Address */}

        <div className="md:col-span-2">
          <label className="font-medium mb-2 block">
            Address
          </label>

          <textarea
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none"
          />
        </div>

        {/* Society Head */}

        <div className="md:col-span-2 mt-5">
          <h2 className="text-2xl font-bold border-b pb-2">
            Society Head Details
          </h2>
        </div>

        <div>
          <label className="font-medium mb-2 block">
            Head Name
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <User size={20} className="text-gray-400" />

            <input
              name="headName"
              value={formData.headName}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="font-medium mb-2 block">
            Head Email
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Mail size={20} className="text-gray-400" />

            <input
              type="email"
              name="headEmail"
              value={formData.headEmail}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="font-medium mb-2 block">
            Head Phone
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Phone size={20} className="text-gray-400" />

            <input
              name="headPhone"
              value={formData.headPhone}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="font-medium mb-2 block">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <Lock size={20} className="text-gray-400" />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 outline-none"
              placeholder="society_admin"
            />
          </div>
        </div>

        

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white px-10 py-3 rounded-lg font-semibold"
          >
            {loading ? "Registering..." : "Register Society"}
          </button>
        </div>

      </form>

      {error && (
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
          <AlertCircle className="mt-0.5" size={20} />
          <p>{error}</p>
        </div>
      )}

     

    </div>
  );
};

export default AddSociety;