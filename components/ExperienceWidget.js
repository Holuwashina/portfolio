import CardWidget from './CardWidget';

const ExperienceData = [
    {
        id: 1,
        contents: [
            {
                css: "subtitle1",
                text: "Passaggregate"
            },
            {
                css: "caption",
                text: "2017 - 2022"
            },
            {
                css: "subtitle1",
                text: "Passaggregate Nig ltd"
            },
            {
                css: "subtitle1",
                text: "Development and execution of Passaggregate Ideas."
            },
        ]
    },
    {
        id: 2,
        contents: [
            {
                css: "subtitle1",
                text: "Freelancing"
            },
            {
                css: "caption",
                text: "2022 - Present"
            },
            {
                css: "subtitle1",
                text: "Series of job related to programming"
            },
            {
                css: "subtitle1",
                text: "Development of mobile and web application"
            },
        ]
    },
]


const ExperienceWidget = () =>  <CardWidget cardData={ExperienceData} />

export default ExperienceWidget;