import { WhatsappShareButton, WhatsappIcon } from "react-share"

function WhatsAppShareBtn({borderRadius, shareUrl}) {
  return (
    <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={35} borderRadius={borderRadius}/>
    </WhatsappShareButton>
  )
}

export default WhatsAppShareBtn