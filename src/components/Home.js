import React from 'react';

const Home  = () => {
    return (
        <div>
            <div className='add-to-cart'>
                <img src='https://imgs.search.brave.com/Lu1_i0AVU0l3cZ9WcfKZBNDijIXiAl7Bat0_sFeldhY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzczLzEwLzY0/LzM2MF9GXzczMTA2/NDI4X1E5MUxOVWln/ZzRaUklpMUl0eElj/Z0V6eVc4Qzl5bHVF/LmpwZw' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://imgs.search.brave.com/NiZ4yurI12n6OYdGUDJRah8hpDnT6oyN545bWxMwm80/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXBob25lbGlmZS5j/b20vc2l0ZXMvaXBo/b25lbGlmZS5jb20v/ZmlsZXMvc3R5bGVz/L3NjcmVlbnNob3Rf/aXBob25leHJfNjYw/XzJ4L3B1YmxpYy9p/bWFnZTdfMTguanBl/Zz9pdG9rPU14cFFk/eEVa' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $8000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;