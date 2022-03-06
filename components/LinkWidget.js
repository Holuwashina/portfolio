import Link from "next/link";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const LinkWidget = (props) => {
   const {children, name, path} = props
    return (
        <>
            <Link href={path}>
                <Box sx={{ textAlign: 'center' }}>
                    <IconButton color="inherit" size='small'>
                        {children}
                    </IconButton>
                    <Typography variant='body2' sx={{ marginTop: '-3px' }}>
                        {name}
                    </Typography>
                </Box>
            </Link>
        </>
    )
}

export default LinkWidget;