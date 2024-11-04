import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    address: '',
    previousSchool: '',
    parentName: '',
    parentContact: '',
    program: '',
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      documents: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <div>
      <Header />
    </div>
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-[#000435] mb-6 text-center">Ongata Crown Student Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pupil Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        {/* Other Fields */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Previous School <span className='text-gray-400'>(optional)</span></label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Parent/Guardian Name</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Parent/Guardian Contact</label>
          <input
            type="tel"
            name="parentContact"
            value={formData.parentContact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required multiple
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Program of Interest</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select Program</option>
            <option value="primary">Primary School</option>
            <option value="secondary">Secondary School</option>
            <option value="highschool">High School</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Documents</label>
          <input
            type="file"
            name="documents"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#000435] text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
};

export default AdmissionForm;
