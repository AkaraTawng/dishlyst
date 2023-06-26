import { LinkedinShareButton, LinkedinIcon } from "react-share"

function LinkedInShareBtn({borderRadius}) {
  return (
    <LinkedinShareButton>
        <LinkedinIcon size={35} borderRadius={borderRadius}/>
    </LinkedinShareButton>
  )
}

export default LinkedInShareBtn