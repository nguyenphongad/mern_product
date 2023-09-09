import React from 'react'


const HeaderComponent = () => {
    return (
        <div className="header">
            <div>
                logo
            </div>
            <div>
                <input type="text" placeholder="input search" />
                <button>SEARCH</button>
            </div>
            <div>
                <div>

                    <button>Dang nhap</button>
                    <button>Dang ky</button>
                </div>
                <div>
                    account
                </div>
            </div>
            <div>
                Gio hang
            </div>
        </div>
    )
}

export default HeaderComponent