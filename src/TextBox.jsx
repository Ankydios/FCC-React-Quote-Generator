import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { PropTypes } from './prop-types'

const TextBox = ({text,id}) => {
    return <div className='text-wrapper'>
            
        <p id={id}><FontAwesomeIcon icon={faQuoteLeft} size='xl'/>  {text}</p>
    </div>
}

TextBox.propTypes = {
    text: PropTypes(String),
    id: PropTypes(String)
}

export default TextBox