import './About.scss';

const About = (): JSX.Element => {
  return (
    <section id='about' className='about-block'>
      <img alt='' className='logo' src='about-logo.webp'/>
      <div className='text'>
        <p>We established in 1996 and are among the top three restaurants in the region.</p>
        <p>All food is prepared in the kitchen by the best chefs in our city right inside the restaurant.</p>
        <p>In addition, in this beautiful place you can not only taste delicious dishes, but also enjoy a truly impressive atmosphere.</p>
        <p>Welcome to the Acropolis Secret.</p>
      </div>
      <img alt='' className='photo' src='about-photo.webp'/>
    </section>
  );
};

export default About;
