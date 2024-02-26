import { useEffect, useState, useCallback } from "react";

export const useIsClickOutTwo = (setter: (bool: boolean) => void): [(node: any) => void] => {

    const [ele, setEle] = useState<HTMLDivElement | null>(null)
  
    const eleCallbackTwo = useCallback((node: HTMLDivElement) => {
        setEle(node)
    }, [])

    useEffect(() => {
        if (ele === null) return;

        const handleClick = (e: any) => {
            if (ele.contains(e.target)) return setter(true);
            return setter(false)
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [ele]);

    return [eleCallbackTwo]
};

export default useIsClickOutTwo;