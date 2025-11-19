export default function Contact() {
  return (
    <section className="section" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact</h1>
      <p>
        Have a question about my work or want to discuss a project? Feel free to reach out.
      </p>

      <form
        className="card"
        aria-label="Contact form"
        onSubmit={e => {
          e.preventDefault();
          alert('This is a demo form. Replace with a real endpoint or email link.');
        }}
      >
        <div>
          <label htmlFor="name">Name</label><br />
          <input id="name" name="name" type="text" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: '0.75rem' }}>
          <label htmlFor="email">Email</label><br />
          <input id="email" name="email" type="email" required style={{ width: '100%' }} />
        </div>

        <div style={{ marginTop: '0.75rem' }}>
          <label htmlFor="message">Message</label><br />
          <textarea id="message" name="message" rows={4} required style={{ width: '100%' }} />
        </div>

        <button type="submit" className="btn" style={{ marginTop: '0.75rem' }}>
          Send message
        </button>
      </form>
    </section>
  );
}
