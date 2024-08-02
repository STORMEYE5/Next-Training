"use client"

import { useEffect, useRef, useState } from 'react';
import Modal from '@components/modal/Modal';
import './page.scss';
import { useRouter, useSearchParams } from 'next/navigation';

const Home = () => {
    const [active, setActive] = useState<boolean>(false);
    const targetRef = useRef<HTMLElement>(null);
    
    const router = useRouter();
    const queryParams = useSearchParams();
    const queryParamsSet = new URLSearchParams(queryParams);
    
    const modalParam = queryParams.get('modal');
    
    useEffect(() => {
        window.localStorage.removeItem("modal");        
    }, [window]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        handleScroll();
        
        if (active) {
            queryParamsSet.set("modal", "open")
            router.push(`?${queryParamsSet.toString()}`, { scroll: false });
            localStorage.setItem("modal", "true")
        } else {
            queryParamsSet.delete("modal")
            router.replace(`?${queryParamsSet.toString()}`, { scroll: false })
            return
        }
        
        if (modalParam === "open") {
            setActive(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [queryParamsSet, router, active, modalParam]);

    const handleScroll = () => {
        if (!localStorage.getItem("modal")) {
            if (targetRef.current) {
                const targetRect = targetRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                if (targetRect.top >= (viewportHeight / 2) && targetRect.bottom <= viewportHeight) {
                    setActive(true); 
                }
            }
        }
    };

    return (
        <>
            <section className='section'>
                <h1>test</h1>
                <div className="block">
                    block
                </div>
            </section>
            <section className='section'>
                <h1>test</h1>
                <div className="block">
                    block
                </div>
            </section>
            <section ref={targetRef} className='section2'>
                {active && (
                <Modal bgColor='#000000bb' active={active} setActive={setActive} >
                </Modal>
            )}
            </section>
            <section className='section'>
                <h1>test</h1>
                <div className="block">
                    block
                </div>
            </section>
            <section className='section'>
                <h1>test</h1>
                <div className="block">
                    block
                </div>
            </section>
            <section className='section'>
                <h1>test</h1>
                <div className="block">
                    block
                </div>
            </section>

            
        </>
    );
}

export default Home;
