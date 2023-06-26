import { TwitterShareButton, TwitterIcon} from 'react-share';

function TwitterShareBtn({borderRadius}) {
  return (
    <TwitterShareButton>
        <TwitterIcon size={35} borderRadius={borderRadius}/>
    </TwitterShareButton>
  )
}

export default TwitterShareBtn;