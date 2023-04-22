import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CgWebsite } from 'react-icons/cg';
import { DiAndroid } from 'react-icons/di';
import { SiIos } from 'react-icons/si';
import { FaUserCog } from 'react-icons/fa';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

const KnowlegeData = [
  {
    id: 1,
    icon: <CgWebsite />,
    caption: 'Web application development',
  },
  {
    id: 2,
    icon: <DiAndroid />,
    caption: 'Android development',
  },
  {
    id: 3,
    icon: <SiIos />,
    caption: 'IOS development',
  },
  {
    id: 4,
    icon: <FaUserCog />,
    caption: 'UI / UX design',
  },
  {
    id: 5,
    icon: <MdOutlineScreenSearchDesktop />,
    caption: 'Search engine optimization',
  },
];

const KnowlegeWidget = () => {
  return (
    <List>
      {KnowlegeData.map((data, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>{data.icon}</ListItemIcon>
            <ListItemText disableTypography primary={data.caption} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default KnowlegeWidget;
