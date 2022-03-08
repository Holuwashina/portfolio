import * as React from 'react';
import {  Button, Stack, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, Select, MenuItem , Dialog, DialogActions, DialogContent, Slide } from "@mui/material";
import { BsFilterLeft } from "react-icons/bs";
import Services from "../../sections/Services";


const serviceCard = [
	{
		id: 1,
		type: "E - Learning",
		progress: "In-progress",
		severity: "info",
		img: "project1.png",
	},
	// {
	// 	id: 2,
	// 	type: "Crypto",
	// 	progress: "Completed",
	// 	img: "dwt.svg",
	// },
	// {
	// 	id: 3,
	// 	type: "E - Commerce",
	// 	progress: "In-progress",
	// 	img: "gb.svg",
	// },
];

function Portfolio() {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleProjectLink = () => {
		event.preventDefault(); 
		window.open("https://pass-aggregate.vercel.app", "_blank");
	  }	


	return (
		<>
			<Button endIcon={<BsFilterLeft />} onClick={handleClickOpen}>Filter</Button>
			<Services serviceCard={serviceCard} handleProjectClick={handleProjectLink} />
			<DialogComponent open={open} handleClose={handleClose} />
		</>
	);
}
export default Portfolio;




const DialogComponent = ({ open, handleClose }) => {

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{ mt: 9 }}
		>
			<DialogContent>
				<Stack spacing={2} sx={{ minWidth: 300 }}>
					<FormControl size="small" fullWidth focused>
						<InputLabel id="simple-select">Category</InputLabel>
						<Select
							label="Category"
							labelId="simple-select"
						>
							<MenuItem value="Education">Commerce</MenuItem>
							<MenuItem value="Commerce">Education</MenuItem>
							<MenuItem value="Finance">Finance</MenuItem>
							<MenuItem value="Others">Others</MenuItem>
						</Select>
					</FormControl>

					<FormControl>
						<FormLabel id="simple-radio-button">Progress</FormLabel>
						<RadioGroup row aria-labelledby="simple-radio-button" name="row-radio-button">
							<FormControlLabel value="In-progress" control={<Radio size="small" />} label="In-progress" />
							<FormControlLabel value="Completed" control={<Radio size="small" />} label="Complete" />
						</RadioGroup>
					</FormControl>
				</Stack>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Filter</Button>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);

}