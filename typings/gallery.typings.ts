export interface Gallery {
    image: string,
    artist_name: string,
    location: string,
    id: number,
    lat: number,
    long: number,
    slug: string,
    name: string,
    isLiked?: boolean,
    markGalleryLiked?: (id: number) => void
}

