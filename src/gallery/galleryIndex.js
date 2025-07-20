import './gallery.css'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

function GalleryIndex() {

    function galleryPreview() {
        //todo: write function to preview next 4 css images
        return (<>
            <div className="galleryPreview">test</div>
            <div className="galleryPreview">test2</div>
            <div className="galleryPreview">test3</div>
            <div className="galleryPreview">test4</div>
        </>
        )
    }
    return (
        <div className="galleryContainer">
            <h1 className="dancing-script">Gallery</h1>

            <div className="galleryImagesRow">
                <div className="galleryImageContainer">css image</div>
                <div className="galleryPreviewContainer">{galleryPreview()}</div>
            </div>
            <div className="MenuIcon">
                <ArrowLeft />
                <ArrowRight />
            </div>
        </div>
    )
}

export default GalleryIndex
