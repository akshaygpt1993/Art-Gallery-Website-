import Search from "@/components/search";
import ArtCard from "@/modules/gallery/list/components/art-card"
import { Gallery } from "@/typings/gallery.typings";
import { Grid } from "@mui/material";
import { useState } from "react";

const AllArtGallery = (
    {list, markGalleryLiked}:
    {list: Array<Gallery>, markGalleryLiked?: (id: number) => void}
) => {
    const [searchText, setSearchText] = useState("");

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

export default AllArtGallery;