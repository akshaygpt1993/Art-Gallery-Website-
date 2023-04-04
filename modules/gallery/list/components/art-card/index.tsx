import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Gallery } from '@/typings/gallery.typings';

const ArtCard = (
    {name, image: imageUrl, isLiked, id, artist_name, location, slug, markGalleryLiked}:
    Gallery
) => {
    const {push} = useRouter();
    const navigateToDetail = () => {
        push({
            pathname: `/art-gallery/${slug}`,
        })
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
        <Image src={imageUrl} width={345} height={140} alt="Lion Pic" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {artist_name} painting is kept at {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={navigateToDetail} size="small">Origin</Button>
        {markGalleryLiked && <Button color={isLiked? "success": "primary"} onClick={() => markGalleryLiked(id)} size="small">Like</Button>}
      </CardActions>
    </Card>
  );
}

export default ArtCard