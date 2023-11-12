import { useInView } from "react-intersection-observer";

function Page() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="mainpage3">
      <div className={`detailscontainer`}>
        <h1 className={`detailstitle ${inView ? "fade-up" : ""}`} ref={ref}>
          How Sustainabite works
        </h1>
        <p className={`parag ${inView ? "fade-up delay1" : ""}`}>
          Sustainabite is a website dedicated to helping individuals make
          sustainable choices when it comes to their meals. By entering the
          details of your meal, we analyze its carbon footprint and provide you
          with information on how it impacts the environment. With Sustainabite,
          you can make informed decisions and contribute to a greener future.
        </p>
        <img
          ref={ref}
          className={`Icon ${inView ? "fade-up delay2" : ""}`}
          src="src\assets\icon1.png"
          style={{ alignSelf: "center" }}
        ></img>
      </div>
    </div>
  );
}
export default Page;
