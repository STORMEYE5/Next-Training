import React, { useEffect, useState } from 'react';
import Modal from "../modal/Modal";
import styled from "styled-components";
import ModalContent from '../modal/ModalContent';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Navbar: any = ({ logo }) => {

    const [active, setActive] = useState<boolean>(false);
    const router = useRouter()

    const queryParams = useSearchParams();
    const queryParamsSet = new URLSearchParams(queryParams);

    const modalParam = queryParams.get('modal');

    useEffect(() => {
        if(modalParam === "open"){
            setActive(true);
        }
    }, [modalParam])

    useEffect(() => {
        if (!active) {
            queryParamsSet.delete("modal")
            router.replace(`?${queryParamsSet.toString()}`)
        }
    }, [active, queryParamsSet, router]);

    const handleClick = () => {
        setActive(true);
        queryParamsSet.set("modal", "open")
        router.push(`?${queryParamsSet.toString()}`);
    }


    return (
        <Wrapper>
            <nav className="navbar">
                <img src="https://res.cloudinary.com/dkljq8teu/image/upload/v1721642642/White__1__uto9qo.svg" alt="Pampers" />

                <button type="button" className='search_button' onClick={() => handleClick()}>
                    <img src="https://res.cloudinary.com/dkljq8teu/image/upload/v1721992304/magnifying-glass-solid_r3yqot.svg" alt="Search" />
                </button>

               
                <Modal bgColor='#000000bb' active={active} setActive={setActive} queryParams={queryParamsSet}>
                    <ModalContent />
                </Modal>
                
            </nav>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    .navbar {
        background-color: var(--teal);
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgb(102, 102, 102);
        z-index: 3;

        img {
            width: 80px;
            display: flex;
        }

        .search_button {
            width: 30px;
            height: 30px;
            display: grid;
            place-content: center;
            place-self: center;
            border: none;
            background: transparent;
        
            &>img {
                width: 100%;
                height: 100%;
                fill: white;
            }
        }
    }
`

export default Navbar; 
