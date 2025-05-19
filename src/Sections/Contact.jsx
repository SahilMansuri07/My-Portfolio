export default function Contact() {
  return (
    <section id="contact" className="max-w-xl mx-auto p-6">
      
      <h2 className="text-3xl text-center font-semibold mb-4 bg-gradient-to-r from-purple-600 to-amber-600 text-transparent bg-clip-text ">Let's Connect</h2>
      <form className="flex flex-col space-y-4 border p-4 rounded-lg shadow-sm">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
      
    </section>
  )
}
