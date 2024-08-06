import { useEffect, useState } from "react";

const useModalToggle = (targetRef: any, yPos: number) => {

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [userModalClosed, setUserModalClosed] = useState<boolean>(false);

    if (!targetRef && !yPos) {
        return ({modalActive, setModalActive});
    }

    useEffect(() => {
        const handleModalAppearance = () => {
            if (!userModalClosed) {
                if (targetRef.current) {
                    const targetRect = targetRef.current.getBoundingClientRect();

                    if (yPos) {
                        if (targetRect.y <= yPos) {
                            setModalActive(true);
                        } else {
                            setModalActive(false);
                        }
                    }
                }
            }

        };

        window.addEventListener('scroll', handleModalAppearance);

        handleModalAppearance();

        return () => {
            window.removeEventListener('scroll', handleModalAppearance);
        }

    }, [userModalClosed, modalActive, targetRef]);

    return ({modalActive, setModalActive, setUserModalClosed})

}

export default useModalToggle;