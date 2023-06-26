import { FacebookShareButton, FacebookIcon} from 'react-share';

function FacebookShareBtn({borderRadius, shareUrl}) {
  return (
    <FacebookShareButton url={shareUrl} title={"sub me"} quote={'hello'}>
        <FacebookIcon size={35} borderRadius={borderRadius}/>
    </FacebookShareButton>
  )
}

export default FacebookShareBtn