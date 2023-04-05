import React, {useState} from 'react';
import MaterialTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ArtGalleryList from '@/modules/gallery/list/all';
import TabPanel, { a11yProps } from '@/components/tab-panel';

const ArtGallery = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MaterialTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Wishlist" {...a11yProps(1)} />
        </MaterialTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ArtGalleryList type="All" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArtGalleryList type="Favourite"   />
      </TabPanel>
    </Box>
  );
}

export default ArtGallery;