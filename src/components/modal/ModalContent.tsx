import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';


const ModalContent: any = ({ setPopUpActive }) => {
    const [text, setText] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        if(inputRef.current && count > 0){
            inputRef.current.value = '';
        }

    }, [count, inputRef]);

    const handleButton = () => {
        if (count < 5 && inputRef.current) {
            setText(text => [...text, (inputRef.current?.value + '\n')]);
            setCount(count + 1);
        }        
    }
    
    return (
        <Wrapper>
            <div className="popup_header">
                <div className="modal_title">
                    <span>What are you looking for?</span>
                </div>
                <div className="modal_functions">
                    <input ref={inputRef} className='input_box' type="search" placeholder='SEARCH' />
                    <button className='search_button' onClick={handleButton}>O</button>
                </div>
            </div>
            <p className="popup_details">
                {text.map((content, index) => (content))}
            </p>
            {(count === 5) && <span>You cannot add more items</span>}
        </Wrapper>
    );
}

export default ModalContent;

export const Wrapper = styled.div`
    .popup_header {
        display: flex;
        flex-direction: column;
        border: none;

        .modal_title {
            position: relative;
            display: flex;
            width: 100%;
            height: 30px;
            justify-content: center;
            align-items: center;
            margin-top: 5px;

            span {
                font-size: 20px;
                color: var(--indigo);
            }
        }

        .modal_functions {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 40px;
            border: 1px solid var(--indigo);

            .input_box {
                border: none;
                width: 80%;
                margin: 10px 0 10px 10px;
                padding: 0 10px;
            }

            .search_button {
                width: 10%;
                height: 40px;
                border: none;
                margin: 10px;
                margin-left: 0;
            }
        }
    }

    .popup_details {
        margin: 10px;
        padding: 0 5px;
        white-space: pre-wrap;
        line-height: 1.4;
        font-size: 20px;
    }
`