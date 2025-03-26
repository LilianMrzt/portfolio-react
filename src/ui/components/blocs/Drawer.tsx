import React, { type FC, type ReactNode } from 'react'
import { type DrawerProps } from '@interfaces/components/blocs/DrawerProps'
import './drawer.css'

const Drawer: FC<DrawerProps> = ({
    isDrawerOpen,
    onClose
}): ReactNode => {
    return (
        <>
            <div
                className={`drawer-background-wrapper ${isDrawerOpen && 'visible'}`}
            >
                <div
                    className={'drawer-background'}
                    onClick={onClose}
                />
            </div>
            <div
                className={`drawer ${isDrawerOpen && 'open'}`}
            >

            </div>
        </>
    )
}

export default Drawer
