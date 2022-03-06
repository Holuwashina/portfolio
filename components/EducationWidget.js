import CardWidget from './CardWidget';

const EduData = [
    {
        id: 1,
        contents: [
            {
                css: "subtitle1",
                text: "University"
            },
            {
                css: "caption",
                text: "2017 - 2021"
            },
            {
                css: "subtitle1",
                text: "Tai Solarin University, Ijebu-Ode Nigeria."
            },
            {
                css: "subtitle1",
                text: "B.Ed in Computer Science"
            },
        ]
    },
    {
        id: 2,
        contents: [
            {
                css: "subtitle1",
                text: "University"
            },
            {
                css: "caption",
                text: "2017 - 2021"
            },
            {
                css: "subtitle1",
                text: "Tai Solarin University, Ijebu-Ode Nigeria."
            },
            {
                css: "subtitle1",
                text: "B.Ed in Computer Science"
            },
        ]
    },
]


const EducationWidget = () => <CardWidget cardData={EduData} />

export default EducationWidget;