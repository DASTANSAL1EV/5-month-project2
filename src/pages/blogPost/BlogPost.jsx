import './blogPost.scss';

export default function BlogPost() {
  return (
    <section className="post container">
      <h1>Full Guide to Becoming a Professional Chef</h1>
      <div className="post__author">
        <img src="https://i.pravatar.cc/80?img=12" alt="John Smith" />
        <b>John Smith</b>
        <span>15 March 2022</span>
      </div>
      <p className="post__lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
        Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus.
      </p>
    </section>
  );
}