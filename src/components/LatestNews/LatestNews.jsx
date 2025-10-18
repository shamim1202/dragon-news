import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 md:p-3">
      <p className="bg-secondary text-white md:py-1.5 md:px-4">Latest</p>
      <Marquee pauseOnHover={true}>
        <div className="flex md:gap-5">
          <p className="text-accent font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, aliquam?
          </p>
          <p className="text-accent font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, aliquam?
          </p>
          <p className="text-accent font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Recusandae, aliquam?
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
