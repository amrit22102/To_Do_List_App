import React from 'react'

const Header = ({title}) => {
    let property = {
        backgroundColor: 'darkgreen',
        color: 'white'
    }
  return (
    <header style={property}>
        <h2>{title}</h2>
    </header>
  )

}
Header.defaultProps = {
  title: "DefaultTitle"
}

export default Header