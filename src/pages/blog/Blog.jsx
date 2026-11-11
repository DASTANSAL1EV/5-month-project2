import './blog.scss';

export default function Blog() {
  return (
    <section className="blog container">
      <h1>Blog & Article</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

      <form className="blog__search" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search article, news or recipe..." />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}