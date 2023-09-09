import React from 'react'
import CardComponent from '../../CardComponent/CardComponent'
import { Row } from 'antd'

const HomePage = () => {
    return (
        <div className='wrap_component'>

            <Row gutter={16}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </Row>
        </div>
    )
}

export default HomePage