"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";


const MordalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    return ( 
        <>
            <PreviewModal />
        </>
     );
}
 
export default MordalProvider;