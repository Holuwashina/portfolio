import Hero from "../sections/Hero";
import Services from "../sections/Services";

const ServicesData = {
  heading: "Services",
  imgSize: 100,
  serviceCard: [
    {
      id: 1,
      type: "Ecommerce website",
      img: "mobile-shopping.png",
      url: "/portfolio",
    },
    {
      id: 2,
      type: "Landing page",
      img: "landing-page.png",
      url: "/portfolio",
    },
    {
      id: 3,
      type: "Web portal",
      img: "search-engine.png",
      url: "/portfolio",
    },
    {
      id: 4,
      type: "Personal website",
      img: "briefcase.png",
      url: "/portfolio",
    },
    {
      id: 5,
      type: "Crowdfunding website",
      img: "multiple-user.png",
      url: "/portfolio",
    },
    {
      id: 6,
      type: "Corporate website",
      img: "hospital.png",
      url: "/portfolio",
    },
    {
      id: 7,
      type: "Government website",
      img: "website.png",
      url: "/portfolio",
    },
    {
      id: 8,
      type: "Community forums",
      img: "invitation.png",
      url: "/portfolio",
    },
    {
      id: 9,
      type: "Blog",
      img: "article.png",
      url: "/portfolio",
    },
    {
      id: 10,
      type: "Auction website",
      img: "shopping.png",
      url: "/portfolio",
    },
    {
      id: 11,
      type: "CBT web application",
      img: "computer.png",
      url: "/portfolio",
    },
    {
      id: 12,
      type: "Political website",
      img: "news-politics.png",
      url: "/portfolio",
    },
    {
      id: 13,
      type: "Media sharing website",
      img: "photo-editing.png",
      url: "/portfolio",
    },
  ],
};

export default function Home() {
  const { serviceCard, heading, url, imgSize } = ServicesData;

  return (
    <>
      <Hero />
      <Services
        serviceCard={serviceCard}
        heading={heading}
        imgSize={imgSize}
        url={url}
      />
    </>
  );
}
