import React, {useState} from 'react';
import MaterialTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllArtGallery from '@/modules/gallery/list/all';
import TabPanel, { a11yProps } from '@/components/tab-panel';
import mockData from "./mock-data.json"
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from './redux/reducer';
import { Gallery } from '@/typings/gallery.typings';

const ArtGallery = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const artGalleries = useSelector<{gallery: Gallery[]}>((state) => state.gallery.values);
  const dispatch = useDispatch()

  const markGalleryLiked = (likedGalleryId: number) => {
    dispatch(toggleLike(likedGalleryId))
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