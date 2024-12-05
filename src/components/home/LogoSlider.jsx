import logo1 from "../../assets/sponsors/logo1.jpeg";
import logo2 from "../../assets/sponsors/logo2.jpeg";
import logo3 from "../../assets/sponsors/logo3.jpeg";

const LogoSlider = () => {
  const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden p-4 rounded-lg">
      <div className="flex w-max animate-slide gap-8">
        {logos.concat(logos).map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-lg"
          >
            <img src={logo.src} alt={logo.alt} className="h-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
