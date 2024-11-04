import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Curriculum = () => {
  const curriculumData = [
    {
      title: 'Early Childhood Education',
      description: 'We focus on the foundational skills and learning habits that set up young learners for lifelong success.',
      icon: 'https://via.placeholder.com/80',
    },
    {
      title: 'Primary Education',
      description: 'Our primary education curriculum emphasizes core subjects, critical thinking, and creativity.',
      icon: 'https://via.placeholder.com/80',
    },
    {
      title: 'Secondary Education',
      description: 'We prepare students for higher education with a comprehensive secondary school curriculum that covers a wide range of subjects.',
      icon: 'https://via.placeholder.com/80',
    },
    {
      title: 'Extracurricular Activities',
      description: 'A variety of extracurricular programs to promote physical, social, and emotional development.',
      icon: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <>
    <div>
        <Header />
    </div>

    <div className="bg-gray-50 py-16 px-4">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold text-[#000435]">Our Curriculum</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Explore our diverse curriculum designed to inspire a love of learning, creativity, and leadership development.
        </p>
      </section>

      {/* Curriculum Sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {curriculumData.map((item, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <img src={item.icon} alt={item.title} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-[#000435]">{item.title}</h3>
              <p className="text-gray-600 mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Section with Parallax Effect */}
      <section className="relative py-16 bg-cover bg-center my-16" style={{ backgroundImage: 'url(https://images.pexels.com/photos/448877/pexels-photo-448877.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
        <div className="bg-black bg-opacity-50 py-16 text-center text-white px-4">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            At Ongata Crown School, we believe in providing more than just an academic education. We focus on developing well-rounded individuals prepared to succeed in all aspects of life.
          </p>
          <button className="bg-white text-[#000435] px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all">
            Learn More
          </button>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#000435] text-white py-16 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits of Our Curriculum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Holistic Learning</h3>
              <p className="text-sm">
                Our curriculum promotes academic success along with personal growth and leadership skills.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
              <p className="text-sm">
                We provide tailored learning approaches for each student, ensuring everyone thrives.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Innovative Teaching</h3>
              <p className="text-sm">
                Our faculty uses the latest teaching methods and technology to engage students.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Global Readiness</h3>
              <p className="text-sm">
                We prepare students for the global world with skills and knowledge that go beyond the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#000435] mb-4">What Our Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-gray-600 mb-4">
              “Ongata Crown has changed my outlook on education. The teachers are amazing, and I love the diverse learning opportunities.”
            </p>
            <h4 className="text-xl font-semibold text-[#000435]">– John Doe</h4>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-gray-600 mb-4">
              “The curriculum here goes beyond academics. I feel more prepared to face real-world challenges, and my confidence has grown.”
            </p>
            <h4 className="text-xl font-semibold text-[#000435]">– Jane Smith</h4>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-gray-600 mb-4">
              “I appreciate the focus on both personal and academic growth at Ongata Crown. It’s truly a place that fosters success.”
            </p>
            <h4 className="text-xl font-semibold text-[#000435]">– Michael Brown</h4>
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

export default Curriculum;
