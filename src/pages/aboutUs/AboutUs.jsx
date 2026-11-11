import './aboutUs.scss';

const stats = [
  { value: '500+', label: 'Recipes' },
  { value: '120', label: 'Chefs' },
  { value: '50K', label: 'Readers' },
];

const team = [
  { id: 1, name: 'John Smith', role: 'Head Chef', img: 'https://i.pravatar.cc/200?img=12' },
  { id: 2, name: 'Wade Warren', role: 'Food Writer', img: 'https://i.pravatar.cc/200?img=33' },
  { id: 3, name: 'Dianne Russell', role: 'Photographer', img: 'https://i.pravatar.cc/200?img=47' },
];

export default function AboutUs() {
  return (
    <section className="about">
      <div className="about__inner">
        <h1 className="about__title">About us</h1>
        <p className="about__text">
          Foodieland is a place where simple and tasty recipes meet people who love to cook.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        <ul className="about__stats">
          {stats.map((s) => (
            <li key={s.label} className="about__stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        <h2 className="about__subtitle">Our team</h2>
        <div className="about__team">
          {team.map((m) => (
            <article key={m.id} className="about__card">
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <span>{m.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}