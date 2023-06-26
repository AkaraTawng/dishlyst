import { TwitterShareButton, TwitterIcon} from 'react-share';

function TwitterShareBtn({borderRadius, shareUrl}) {
  return (
    <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={35} borderRadius={borderRadius}/>
    </TwitterShareButton>
  )
}

export default TwitterShareBtn;