export interface Movie {
    id: number
    title: string
    releaseDate: Date
    popularity: number
    rating: number
    img: string
    onFavoriteClick?: () => void
    isFavorite?: boolean
}
