export default function Design() {
  return (
    <section className="section" aria-labelledby="design-heading">
      <h1 id="design-heading">UI/UX Design Process</h1>
      <p>
        Selected artifacts from my UI/UX workflow, including annotated wireframes,
        mood boards, and functional prototypes for web applications.
      </p>

      <article className="card" aria-label="Wireframes">
        <h2>Wireframes with annotations</h2>
        <p>
          Low-fidelity wireframes used to validate information architecture and content
          hierarchy with stakeholders before visual design.
        </p>
        <img
          src="/design/wireframe-intranet.png"
          alt="Wireframe of intranet layout with content sections and annotated notes."
          style={{ borderRadius: '12px', width: '100%', marginTop: '0.75rem' }}
        />
      </article>

      <article className="card" aria-label="Mood board">
        <h2>Style tiles & mood boards</h2>
        <p>
          Explorations of color, typography, iconography, and imagery to align with
          brand guidelines and the tone of security-focused communications.
        </p>
        <img
          src="/design/moodboard-security.png"
          alt="Mood board showing color palette, typography samples, and imagery."
          style={{ borderRadius: '12px', width: '100%', marginTop: '0.75rem' }}
        />
      </article>

      <article className="card" aria-label="Prototype">
        <h2>Functional prototypes</h2>
        <p>
          Clickable prototypes used to test navigation flows and micro-interactions
          with representative users before implementation.
        </p>
        <img
          src="/design/prototype-nav.gif"
          alt="Prototype animation showing navigation interaction and page transitions."
          style={{ borderRadius: '12px', width: '100%', marginTop: '0.75rem' }}
        />
      </article>
    </section>
  );
}
