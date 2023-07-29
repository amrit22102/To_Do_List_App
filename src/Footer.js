import React from 'react'

const Footer = ({length}) => {
    let foot = new Date();
  return (
    <footer>
        Copyright &copy; {foot.getFullYear()};
        <div>{length} List {length === 1 ? ('Item') : ('Items')}</div>
    </footer>
  )
}

export default Footer