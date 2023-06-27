import { FacebookShareButton, FacebookIcon} from 'react-share';

function FacebookShareBtn({borderRadius, shareUrl}) {
  return (
    <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={35} borderRadius={borderRadius}/>
    </FacebookShareButton>
  )
}

export default FacebookShareBtn