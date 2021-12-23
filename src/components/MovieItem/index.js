// Write your code here

import PopUp from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import {
  ThumbNailImageUrl,
  ThumbNailCard,
  ActionPopupCard,
  ActionPopupCloseBtn,
} from './styledComponents'

const MovieItem = props => {
  const {movieItems} = props

  const {thumbnailUrl, videoUrl} = movieItems

  return (
    <ThumbNailCard>
      <PopUp
        modal
        trigger={<ThumbNailImageUrl src={thumbnailUrl} alt="thumbnail" />}
        className="action_popup_modal_con"
      >
        {close => (
          <ActionPopupCard>
            <ActionPopupCloseBtn
              className=""
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </ActionPopupCloseBtn>
            <ReactPlayer url={videoUrl} />
          </ActionPopupCard>
        )}
      </PopUp>
    </ThumbNailCard>
  )
}

export default MovieItem
