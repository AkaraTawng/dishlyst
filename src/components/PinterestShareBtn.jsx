import { PinterestShareButton, PinterestIcon } from 'react-share'

function PinterestShareBtn({borderRadius, shareUrl}) {
  return (
    <PinterestShareButton url={shareUrl}>
        <PinterestIcon size={35} borderRadius={borderRadius}/>
    </PinterestShareButton>
  )
}

export default PinterestShareBtn