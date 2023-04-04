import React, {useState} from 'react';
import MaterialTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllArtGallery from '@/modules/gallery/list/all';
import TabPanel, { a11yProps } from '@/components/tab-panel';
import mockData from "./mock-data.json"

const ArtGallery = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [artGalleries, setArtGalleries] = useState(mockData);
  const markGalleryLiked = (likedGalleryId: number) => {
    const updatedGalleries = artGalleries.map((item) => {
        if (item.id === likedGalleryId) {
            return {...item, isLiked: !item.isLiked}
        } else {
            return item;
        }
    })
    setArtGalleries([...updatedGalleries ])
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MaterialTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Wishlist" {...a11yProps(1)} />
        </MaterialTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AllArtGallery list={artGalleries} markGalleryLiked={markGalleryLiked} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllArtGallery  markGalleryLiked={markGalleryLiked} list={artGalleries.filter(({isLiked}) => isLiked)} />
      </TabPanel>
    </Box>
  );
}

export default ArtGallery;