import React from 'react'

const Preloader = () => {
  return (
    <div style={{ backgroundColor: 'hsl(0, 0%, 5%)', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Preloader
