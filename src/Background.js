import Background from '../images/background_image.png';
var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")"
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}