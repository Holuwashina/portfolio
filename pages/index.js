import HeroSection from "../sections/HeroSection";
import Services from "../sections/Services";

const ServicesData= {
  heading: "Services",
  serviceCard: [
      {
          id: 1,
          type: "Web Application Development",
          img: "dat.svg"
      },
      {
          id: 2,
          type: "IOS / ANDROID Development",
          img: "dwt.svg"
      },
      {
          id: 3,
          type: "Online & Offline Tutor",
          img: "gb.svg"
      }
  ]
}


export default function Home() {

  const { serviceCard, heading } = ServicesData;

  return (
    <>
      <HeroSection />
			<Services serviceCard={serviceCard} heading={heading} />
    </>
  )
}