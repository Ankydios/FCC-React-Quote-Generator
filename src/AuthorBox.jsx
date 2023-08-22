import {PropTypes} from './prop-types'

const AuthorBox = ({text,id}) => {
    return <div className='author-wrapper'>
            
        <p id={id} className='author'>-{text}</p>
    </div>
}

AuthorBox.propTypes = {
    text: PropTypes(String),
    id: PropTypes(String)
}

export default AuthorBox