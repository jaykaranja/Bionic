import { useCallback, useState } from 'react'

export type PortalViewReturn = {
    /**
     * Boolean state indicating whether portal is open or not.
     */
    isOpen: boolean,
    /**
     * A function used to toggle the isOpen state from true to false or vice versa.
     */
    toggle: () => void,
}
const usePortalView: () => PortalViewReturn = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
    
    return { isOpen, toggle }
}

export default usePortalView