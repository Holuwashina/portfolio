import Hero from "../sections/Hero";
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
      <Hero />
			<Services serviceCard={serviceCard} heading={heading} />
    </>
  )
}