import './contact.scss';

export default function ContactPage() {
  return (
    <section className="contact container">
      <h1>Contact us</h1>

      <div className="contact__body">
        <div className="contact__photo">
          <img src="https://via.placeholder.com/320x380?text=Chef" alt="Chef" />
        </div>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <label>NAME<input placeholder="Enter your name..." /></label>
          <label>EMAIL ADDRESS<input type="email" placeholder="Your email address..." /></label>
          <label>SUBJECT<input placeholder="Enter subject..." /></label>
          <label>ENQUIRY TYPE
            <select>
              <option>Advertising</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </label>
          <label className="contact__full">MESSAGES
            <textarea rows="6" placeholder="Enter your messages..." />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}