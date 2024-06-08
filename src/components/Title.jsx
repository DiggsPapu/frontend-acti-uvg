import PropTypes from 'prop-types'
import style from './title.module.css'
export default function Title({ content, color }){
    return (
        <h3 className={style.title} style={{color: color}}>
            {content}
        </h3>
    )
}
Title.propTypes = {
    content: PropTypes.string,
    color: PropTypes.string,
}