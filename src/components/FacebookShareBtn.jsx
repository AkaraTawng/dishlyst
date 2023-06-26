import { FacebookShareButton, FacebookIcon} from 'react-share';

function FacebookShareBtn({borderRadius}) {
  return (
    <FacebookShareButton>
        <FacebookIcon size={35} borderRadius={borderRadius}/>
    </FacebookShareButton>
  )
}

export default FacebookShareBtn