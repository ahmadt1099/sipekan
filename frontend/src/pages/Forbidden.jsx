import React from 'react'
import Layout from './Layout.jsx'

const Forbidden = () => {
    return (
        <Layout>
            <h1 className="title">Akses Terlarang</h1>
            <h2 className="subtitle">Anda Bukan Admin</h2>
        </Layout>
    )
}

export default Forbidden