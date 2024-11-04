import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Admissions = () => {
  return (
   <>
   <div>
    <Header />
   </div>
   <div className="bg-gray-50 py-16 px-4">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold text-[#000435]">Admissions</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Start your journey with Ongata Crown School by discovering our admission requirements and procedures. We welcome students from all backgrounds to experience holistic learning and development.
        </p>
      </section>

      {/* Admission Process Steps */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Application"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#000435]">1. Submit Application</h3>
              <p className="text-gray-600 mt-4 text-center">
                Fill out our online application form or visit the school for assistance in submitting the application in person.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Review"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#000435]">2. Review & Interview</h3>
              <p className="text-gray-600 mt-4 text-center">
                Our admissions team will review your application and schedule an interview to get to know the student better.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-md shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Acceptance"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#000435]">3. Admission Decision</h3>
              <p className="text-gray-600 mt-4 text-center">
                Once accepted, we will provide detailed instructions for enrollment, including important dates and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#000435] text-center mb-8">Admission Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Requirement 1 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#000435] mb-4">Completed Application Form</h3>
              <p className="text-gray-600">Ensure that all sections of the application form are filled out accurately.</p>
            </div>

            {/* Requirement 2 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#000435] mb-4">Previous Academic Records</h3>
              <p className="text-gray-600">Submit previous school reports, exam results, and other relevant academic documents.</p>
            </div>

            {/* Requirement 3 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#000435] mb-4">Student's Birth Certificate</h3>
              <p className="text-gray-600">A copy of the student's birth certificate is required for enrollment.</p>
            </div>

            {/* Requirement 4 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#000435] mb-4">Medical Certificate</h3>
              <p className="text-gray-600">A valid medical certificate indicating the student's health status.</p>
            </div>

            {/* Requirement 5 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#000435] mb-4">2 Passport Photos</h3>
              <p className="text-gray-600">Recent passport-sized photos of the student for identification purposes.</p>
            </div>

            {/* Requirement 6 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#000435] mb-4">Recommendation Letter</h3>
              <p className="text-gray-600">A recommendation letter from a previous school or teacher is highly encouraged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#000435] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Apply?</h2>
          <p className="text-lg mb-8">
            Join our vibrant learning community today. Click the button below to start the application process.
          </p>
          <Link to="/admform" className="bg-white text-[#000435] px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#000435] mb-6">Need Help with Admissions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you have any questions or need assistance with the admissions process, feel free to contact our admissions team.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-[#000435]">Call Us</h3>
              <p className="text-gray-600">+254 700 123456</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-[#000435]">Email Us</h3>
              <p className="text-gray-600">admissions@ongatacrown.ac.ke</p>
            </div>
          </div>
        </div>
      </section>
    </div>
   <div>
    <Footer />
   </div>
   </>
  );
};

export default Admissions;
