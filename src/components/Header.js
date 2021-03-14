import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({title}) => {
   const onClick = () => {
       console.log('Click')
   }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='blue' text='Add' onClick=
            {onClick} />
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