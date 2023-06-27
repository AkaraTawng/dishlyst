import { LinkedinShareButton, LinkedinIcon } from "react-share"

function LinkedInShareBtn({borderRadius, shareUrl}) {
  return (
    <LinkedinShareButton url={shareUrl} >
        <LinkedinIcon size={35} borderRadius={borderRadius}/>
    </LinkedinShareButton>
  )
}

export default LinkedInShareBtn