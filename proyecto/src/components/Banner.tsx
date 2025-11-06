import BannerImg from "../assets/images/Banner.svg";

export default function Banner() {
  return (
    <section style={{ width: "100%" }}>
      <img
        src={BannerImg}
        alt="Portfolio Banner"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <h1>Welcome to my Portfolio</h1>
    </section>
  );
}