import Hero from "../sections/Hero";
import Services from "../sections/Services";

export default function Home() {

  const ServicesData= {
    heading: "Services",
    btn: "See More",
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

const { serviceCard, heading, btn } = ServicesData;

  return (
    <>
      <Hero />
			<Services
				heading={heading}
				btn={btn}
				serviceCard={serviceCard}
			>
			</Services>
    </>
  )
}