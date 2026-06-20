
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";



function Contact() {

    const form = useRef();
    const sendEmail = (e)=>{

e.preventDefault();


emailjs.sendForm(
"service_wqwvjba",
"template_nzd0j5m",
form.current,
"6xOkPZwdlKgDeb12T"

)
.then(()=>{

usesent("Message Sent Successfully ✅ Stay back! Soon we'll contact you ");

})
.catch(()=>{

usesent("Something went wrong ❌");

});


}
const [sent , usesent]=useState('')

    const [searchParams] = useSearchParams();

const productName = searchParams.get("product");


const [subject,setSubject] = useState(productName || "");

  return (
    <main>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Get in touch for bulk orders, custom manufacturing,
            and export inquiries.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-4 text-gray-600">
              We'd love to hear from you. Whether you're looking
              for custom sportswear, private labeling, or bulk
              export services, our team is ready to help.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="font-semibold text-xl">
                  Email
                </h3>
                <p className="text-gray-600">
                  pczain76@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +92 344 4692842
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Address
                </h3>
                <p className="text-gray-600">
                  Sialkot, Punjab, Pakistan
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Saturday
                </p>
                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-xl">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <form
            ref={form}
onSubmit={sendEmail}
            className="space-y-4">

              <input
              name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border outline-none"
              />

              <input
              name="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border outline-none"
              />

              <input
              name="subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
                className="w-full p-3 rounded-lg border outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            

            </form>
              <p>{sent}</p>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;