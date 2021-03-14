import PropTypes from 'prop-types'


export const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Tasker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header