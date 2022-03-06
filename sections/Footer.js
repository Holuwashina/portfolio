import * as React from "react";
import Image from "next/Image";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { Container, Box, Divider, Typography, Paper, IconButton, Stack, Button, Fade, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiFacebookCircleLine, RiGithubLine, RiTwitterLine, RiWhatsappLine, RiMessengerLine } from "react-icons/ri";
import sideImage from "../public/images/1.svg";


function Footer() {

	// About, Connect & Contact State & Handler
	const [id, setId] = React.useState(false);
	const [about, setAbout] = React.useState(false);

	const handleClickConnectContact = (event) => {
		setId(event.currentTarget.id);
	};

	const handleClickAbout = (event) => {
		event.target.id == "about" && setAbout(!about);
	};


	const FooterData = {
		logo: "Zhine.",
		contactIcons: [
			{
				icon: <RiMessengerLine />,
				link: "www.google.com"
			},
			{
				icon: <RiTwitterLine />,
				link: "www.google.com"
			},
			{
				icon: <RiWhatsappLine />,
				link: "www.google.com"
			},
			{
				icon: <AiOutlineLinkedin />,
				link: "www.google.com"
			}
		],
		followIcons: [
			{
				icon: <RiGithubLine />,
				link: "www.google.com"
			},
			{
				icon: <AiOutlineLinkedin />,
				link: "www.google.com"
			},
			{
				icon: <RiTwitterLine />,
				link: "www.google.com"
			},
			{
				icon: <RiFacebookCircleLine />,
				link: "www.google.com"
			}
		],
		footerBtn: [
			{
				id: "about",
				handler: handleClickAbout,
				btnText: "About me",
			},
			{
				id: "contact",
				handler: handleClickConnectContact,
				btnText: "Contact me",
			},
			{
				id: "connect",
				handler: handleClickConnectContact,
				btnText: "Follow me",
			},
		],
	};

	const { logo, footerBtn, contactIcons, followIcons } = FooterData;

	return (
		<Container maxWidth="sm">
			<Box sx={{ mb: 4, height: 240, textAlign: "center" }}>
				{about ? (
					<TextMobileStepper />
				) : (
					<Image src={sideImage} width={300} height={200} priority />
				)}
			</Box>

			<Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
				{footerBtn.map((btn) => (
					<Button
						key={btn.id}
						id={btn.id}
						onClick={btn.handler}
						variant="contained"
					>
						{btn.btnText}
					</Button>
				))}
			</Stack>

			<Fade in timeout={750}>
				<Box sx={{ height: 30 }}>
					<Stack direction="row" spacing={1} justifyContent="center">
						{id === "contact" && contactIcons.map((contact) => {
							return (
								<Link key={contact.icon} href={contact.link}>
									<IconButton size="small" color="primary">
										{contact.icon}
									</IconButton>
								</Link>
							)
						})
						}
						{id === "connect" && followIcons.map((follow) => {
							return (
								<Link key={contact.icon} href={follow.link}>
									<IconButton size="small" color="primary">
										{follow.icon}
									</IconButton>
								</Link>
							)
						})
						}
					</Stack>
				</Box>
			</Fade>

			<Box sx={{ textAlign: "center" }}>
				<Typography gutterBottom variant="subtitle1" sx={{ mb: 2, mt: 2 }}>
					[ Code Elegant ]
				</Typography>
				<Typography variant="h4">{logo}</Typography>
			</Box>
		</Container>
	);
}

export default Footer;

const steps = [
	{
		question: "Can you work with a team of developers?",
		answer: `Yes, I can join a team of experienced developer to brainstorm and work on a project with 
            great vision.`,
	},
	{
		question: "Can you work full time with a company / organization ?",
		answer: `Yes, I can work with any organization in any peaceful country, as i love to explore.`,
	},
	{
		question: `What's the price you charge on a project ?`,
		answer: `Price of a project is derived from these factors ( application category and complexity ).`,
	},
];

export function TextMobileStepper() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = steps.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Fade in timeout={750}>
			<Paper>
				<Divider sx={{ pb: 3, pt: 2 }}>
					<Typography variant="h5" textAlign="center">
						FAQS
					</Typography>
				</Divider>
				<Typography textAlign="left" sx={{ ml: 3 }}>
					{steps[activeStep].question}
				</Typography>
				<Box textAlign="left" sx={{ height: 100, width: "100%", p: 3 }}>
					{steps[activeStep].answer}
				</Box>
				<MobileStepper
					variant="text"
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Paper>
		</Fade>
	);
}
