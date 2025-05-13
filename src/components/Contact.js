import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const EMAIL = process.env.REACT_APP_EMAIL;
const PHONE = process.env.REACT_APP_PHONE;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary text-lg uppercase tracking-wider">Get in touch</p>
          <h2 className="text-white text-4xl font-bold mt-2">Contact.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-white text-2xl font-semibold mb-4">Let's Talk</h3>
            <div className="flex items-center gap-4">
              <div className="bg-tertiary w-12 h-12 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-secondary">{EMAIL}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-tertiary w-12 h-12 rounded-full flex items-center justify-center">
              <FaPhone className="text-white text-xl scale-x-[-1]" />

              </div>
              <div>
                <h4 className="text-white font-medium">Phone</h4>
                <p className="text-secondary">{PHONE}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-tertiary rounded-2xl p-8 shadow-card"
            >
              <div className="mb-6">
                <label className="text-white font-medium mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="What's your name?"
                  className="bg-black-200 py-4 px-6 rounded-lg text-white w-full outline-none border-none font-medium"
                />
              </div>

              <div className="mb-6">
                <label className="text-white font-medium mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="What's your email?"
                  className="bg-black-200 py-4 px-6 rounded-lg text-white w-full outline-none border-none font-medium"
                />
              </div>

              <div className="mb-6">
                <label className="text-white font-medium mb-2 block">Your Message</label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="What do you want to say?"
                  className="bg-black-200 py-4 px-6 rounded-lg text-white w-full outline-none border-none font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-tertiary hover:bg-[#1d1855] border border-white py-3 px-8 rounded-xl text-white font-bold transition duration-300"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
