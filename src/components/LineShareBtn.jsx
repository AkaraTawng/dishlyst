import { LineShareButton, LineIcon} from 'react-share';

function LineShareBtn({borderRadius}) {
  return (
    <LineShareButton>
        <LineIcon size={35} borderRadius={borderRadius}/>
    </LineShareButton>
  )
}

export default LineShareBtn