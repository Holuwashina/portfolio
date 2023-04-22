import * as React from "react";
import {
  Typography,
  Button,
  Stack,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";
import { BsFilterLeft } from "react-icons/bs";
import Services from "../../sections/Services";

const ServicesData = {
  heading: "Projects",
  url: "https://journals.rectem.edu.ng/index.php",
  serviceCard: [
    {
      id: 1,
      type: "Online journal",
      progress: "completed",
      severity: "info",
      img: "45530.png",
      url: "https://journals.rectem.edu.ng/index.php",
    },
    {
      id: 2,
      type: "Find services",
      progress: "in-progress",
      severity: "info",
      img: "1113.png",
      url: "http://hirehelp.vercel.app",
    },
  ],
};

function Portfolio() {
  const { serviceCard, heading } = ServicesData;

  const [open, setOpen] = React.useState(false);

  const [filter, setFilter] = React.useState("");

  const handleClickOpen = () => {
    setFilter("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilter = () => {
    setFilter("More projects coming...");
  };

  return (
    <>
      {/* <Button endIcon={<BsFilterLeft />} onClick={handleClickOpen}>
        Filter
      </Button> */}
      <Services
        heading={heading}
        serviceCard={serviceCard}
        sx={{ width: "100%" }}
      />
      {/* <DialogComponent
        open={open}
        handleClose={handleClose}
        handleFilter={handleFilter}
        filter={filter}
      /> */}
    </>
  );
}
export default Portfolio;

// const DialogComponent = ({ open, handleClose, handleFilter, filter }) => {
//   const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

//   return (
//     <Dialog open={open} onClose={handleClose} sx={{ mt: 9 }} maxWidth="xs">
//       <DialogContent>
//         <Stack spacing={2}>
//           <FormControl size="small" fullWidth focused>
//             <InputLabel id="simple-select">Category</InputLabel>
//             <Select
//               label="Category"
//               labelId="simple-select"
//               defaultValue="Commerce"
//             >
//               <MenuItem value="Commerce">Commerce</MenuItem>
//               <MenuItem value="Education">Education</MenuItem>
//               <MenuItem value="Finance">Finance</MenuItem>
//               <MenuItem value="Others">Others</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl>
//             <FormLabel id="simple-radio-button">Project Progress</FormLabel>
//             <RadioGroup
//               row
//               aria-labelledby="simple-radio-button"
//               name="row-radio-button"
//             >
//               <FormControlLabel
//                 value="In-progress"
//                 control={<Radio size="small" />}
//                 label="In-progress"
//               />
//               <FormControlLabel
//                 value="Completed"
//                 control={<Radio size="small" />}
//                 label="Completed"
//               />
//             </RadioGroup>
//           </FormControl>
//         </Stack>
//         <Typography variant="body2" align="center" sx={{ color: "red" }}>
//           {filter}
//         </Typography>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleFilter}>Filter</Button>
//         <Button onClick={handleClose}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };
