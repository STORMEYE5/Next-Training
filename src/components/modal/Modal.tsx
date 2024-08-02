import React from 'react';
import styled from 'styled-components';

const Modal: any = ({ active, setActive, children, bgColor }) => {

    if(!active){
        return null;
    }

    const handleClick = (e) => {
        e.target === e.currentTarget && setActive(false);
    }

    return (
        <Wrapper bg_color={bgColor} onClick={(e) => handleClick(e)}>
            <section className='popup_container'>
                <div className="popup_box_container">
                    <button className='close_button' onClick={() => setActive(false)}>X</button>
                    {children}
                </div>
            </section>
        </Wrapper>
    );
}

export default Modal;

const Wrapper = styled.div`
    animation: opaque 0.2s linear;
    position: fixed;
    display: flex;
    background: ${({ bg_color }) => bg_color || "#000"} ;
    height: 100vh;
    width: 100vw;
    z-index: 4;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    @keyframes opaque {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .popup_container {
        animation: opaque 0.2s linear;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
        
        .popup_box_container {
            position: relative;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            min-height: 300px;
            min-width: 350px;
            background-color: #ffffff;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            padding: 10px;

            .close_button {
                position: absolute;
                width: 10%;
                width: 20px;
                height: 20px;
                border: 1px solid gray;
                border-radius: 5px;
                right: 10px;
                background: transparent;
                border: none;
                font-size: 20px;
                z-index: 4;
                color: var(--teal);
            }
        }
    }
`