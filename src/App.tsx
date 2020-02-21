import React from 'react'

import classes from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <h1 className={classes.heading}>React Webpack</h1>
        <p className={classes.info}>React boilerplate with Webpack configuration for bundling with Babel and Typescript.</p>
      </div>
    </div>
  )
}

export default App