import React from 'react'
import img1 from '../../assets/anh1.jpg'

const ProductDetailsComponent = () => {
    return (
        <div>
            <div className='wrap_component_detail'>
                <div className='width_img'>
                    <img src={img1} />
                </div>
                <div className='padding_info_detail_pro'>
                    <h2>Combo Trọn Bộ CONAN ĐẶC SẮC: Conan và Tổ chức Áo Đen (Tập 1, 2) + Conan Tuyển Tập Đặc Biệt </h2>
                    <div>Danh gia : 5 sao | xem (1) danh gia | da ban 252</div>
                    <h1>254.000 đ</h1>
                    <div>
                        Số lượng
                        <button>-</button>
                        <input type='text' value={1} />
                        <button>+</button>
                    </div>
                    <div style={{"margin":"20px 0px"}}>
                        <button>CHỌN MUA</button>
                        <button>TRẢ SAU</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsComponent