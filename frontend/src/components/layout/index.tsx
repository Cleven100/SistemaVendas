import React from 'react'
import Menu from './menu';

const Layout: React.FC = () => {
  return (
    <section className="main-content columns is fullheight">
      <Menu />
      <div className="container column is-10">
        <div className="section">
            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">
                        Sign Up
                    </p>
                </div>
                <div className="card-content">
                    <div className="content">
                        Content
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Layout;