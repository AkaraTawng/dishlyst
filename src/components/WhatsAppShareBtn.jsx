import { WhatsappShareButton, WhatsappIcon } from "react-share"

function WhatsAppShareBtn({borderRadius}) {
  return (
    <WhatsappShareButton>
        <WhatsappIcon size={35} borderRadius={borderRadius}/>
    </WhatsappShareButton>
  )
}

export default WhatsAppShareBtn