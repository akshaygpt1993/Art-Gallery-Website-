import Search from "@/components/search";
import ArtCard from "@/modules/gallery/list/components/art-card"
import { Gallery } from "@/typings/gallery.typings";
import { Grid } from "@mui/material";
import { useState  } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../redux/reducer';

const ArtGalleryList = ({type} : {type: string}) => {
    const [searchText, setSearchText] = useState("");

    let list = useSelector<any>((state) => state.gallery.values) as Gallery[];
    if (type === "Favourite") {
        list = list.filter(({isLiked}) => isLiked)
    }

    const dispatch = useDispatch()
    const markGalleryLiked = (likedGalleryId: number) => {
        dispatch(toggleLike(likedGalleryId))
      }

    const filteredArtGalleries = list.filter(({artist_name, name, location}) => {
        return artist_name.toLowerCase().includes(searchText.toLowerCase())
            || name.toLowerCase().includes(searchText.toLowerCase())
            || location.toLowerCase().includes(searchText.toLowerCase())
    });

    return  (
        <>
            <Search setSearchText={setSearchText} />
            <Grid container>
                {filteredArtGalleries.map((item) => 
                    <Grid px={2} py={4} xs={3} key={item.id} item>
                        <ArtCard {...item} markGalleryLiked={markGalleryLiked} />
                    </Grid>
                )}
            </Grid>
        </>
    )
}

export default ArtGalleryList;