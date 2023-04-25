import React, {FC, PropsWithChildren} from 'react'
import {createPortal} from 'react-dom'

const PortalWrapper: FC<PropsWithChildren> = ({children}) => {
	const portalModal = document.getElementById('portal') as HTMLDivElement

	return createPortal(children, portalModal)
}

export default PortalWrapper