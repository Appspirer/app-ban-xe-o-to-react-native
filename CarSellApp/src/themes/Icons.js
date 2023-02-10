import React from "react";
import next_arrow from '../assets/svgs/next_arrow.svg'
import ic_menu from '../assets/svgs/Icon_Menu.svg'
import logo from '../assets/svgs/TruksLogo.svg'
import ic_close from '../assets/svgs/Icon_close.svg'
import home from '../assets/svgs/home.svg'
import insurance from '../assets/svgs/insurance.svg'
import reservations from '../assets/svgs/reservations.svg'
import messages from '../assets/svgs/messages.svg'
import arrow_up from '../assets/svgs/arrow_up.svg'
import arrow_down from '../assets/svgs/arrow_down.svg'
import ic_back from '../assets/svgs/ic_back.svg'
 
const SVGs = {
    next_arrow,
    ic_menu,
    logo,
    ic_close,
    home,
    insurance,
    reservations,
    messages,
    arrow_down,
    arrow_up,
    ic_back
}

export default {
    Icons: ({ name = "", height, width, style, color = "#000" }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons style={[style, { color }]} name={name} width={width} height={height} />
        }else {
            return null
        }
    }
}