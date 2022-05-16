import { IAlbum } from "../../models/Album"
import { IArtist } from "../../models/Artist"
import { ISong } from "../../models/Song"

interface AlbumSongsProps {
    album: IAlbum;
    artist: IArtist;
    songs: ISong[];
}

export default AlbumSongsProps