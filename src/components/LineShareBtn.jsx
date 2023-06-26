import { LineShareButton, LineIcon} from 'react-share';

function LineShareBtn({borderRadius, shareUrl}) {
  return (
    <LineShareButton url={shareUrl}>
        <LineIcon size={35} borderRadius={borderRadius}/>
    </LineShareButton>
  )
}

export default LineShareBtn