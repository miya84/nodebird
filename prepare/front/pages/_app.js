// pages들의 공통되는 것들을 처리해준다.

import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';


const NodeBird = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>NodeBird</title>
        </Head>
        <Component />
        </>
    )
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;