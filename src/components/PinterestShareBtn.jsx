import { PinterestShareButton, PinterestIcon } from 'react-share'

function PinterestShareBtn({borderRadius}) {
  return (
    <PinterestShareButton>
        <PinterestIcon size={35} borderRadius={borderRadius}/>
    </PinterestShareButton>
  )
}

export default PinterestShareBtn