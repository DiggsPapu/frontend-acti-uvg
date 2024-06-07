import PropTypes from 'prop-types'

export default function Title({ content, color }){
    return (
        <h3 style={{fontFamily: 'RobotoMono', color: color, fontSize: '4vw' }}>
            {content}
        </h3>
    )
}
Title.propTypes = {
    content: PropTypes.string,
    color: PropTypes.string,
}