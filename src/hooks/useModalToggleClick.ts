import { useEffect, useState } from "react";

const useModalToggleClick = () => {

    const [modalActive, setModalActive] = useState<boolean>(false);

    return ({modalActive, setModalActive})

}

export default useModalToggleClick;