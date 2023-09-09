import React from 'react'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const CardComponent = () => {
    return (
        <>
            <Col span={6}>
                <Card
                    hoverable
                    style={{
                        width: 250,
                        margin: "10px 0px",
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Product 1" description="des" />
                    <span>2.34 | da ban 1000+</span>
                    <div className='css_price_product'>1.000.000 đ - 5%</div>
                </Card>
            </Col>
        </>
    )
}

export default CardComponent