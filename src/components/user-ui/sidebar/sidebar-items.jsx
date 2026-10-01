import { Fragment, useEffect, useState } from "react";
import { LINKS, SECTIONS, TEXT } from "../../../utils/data.js";

import CloudDownloadIcon from "../../../assets/svg/cloud-download.svg?react";
import LinkedinLogo from "../../../assets/svg/linkedin.svg?react";
import MailLogo from "../../../assets/svg/mail.svg?react";
import PhoneLogo from "../../../assets/svg/phone.svg?react";
import PinLogo from "../../../assets/svg/pin.svg?react";
import WhatsappLogo from "../../../assets/svg/whatsapp.svg?react";
import { useUIState } from "../../../hooks/context/useUIState.jsx";

export default function SidebarItems({ lang }) {

    const { scrollToSection } = useUIState();
    
    const { contact } = TEXT;

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    
    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    const sections = SECTIONS[lang].map((item, i) => {
        
        const ids = SECTIONS.en;

        switch (i) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: return (
                <li key={item} className="sidebar-section">
                    <span onTouchEnd={ () => scrollToSection(ids[i]) } onClick={ () => scrollToSection(ids[i]) }>
                        {item}
                    </span>
                </li>
            )
        
            default: return (<Fragment key={item}></Fragment>);
        }

    });

    return (
        <>
            {sections}
            
            <li className={"sidebar-section"}>
                <a href={`mailto:${contact[lang].email.value}`}>
                    <MailLogo className="icon"/>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={`https://wa.me/+${contact[lang].phone.number}`} target="_blank">
                    <WhatsappLogo className="icon"/>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={`tel:+${contact[lang].phone.number}`}>
                    <PhoneLogo className="icon"/>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={`${contact[lang].linkedin.value}`} target="_blank">
                    <LinkedinLogo className="icon"/>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={LINKS.cv[lang].link} target="_blank">
                    <CloudDownloadIcon className="icon"/>
                    {isMobile ? (
                        <p>
                            {LINKS?.cv[lang]?.text.split(/\s+/).map( (word) => (
                                <span>
                                    {word}
                                </span>
                            ))}
                        </p>
                    ) : (
                        <p>
                            {LINKS.cv[lang].text}
                        </p>
                    )}
                </a>
            </li>

            <li className={"sidebar-section"}>
                <PinLogo className="icon"/>
                {isMobile ? (
                    <p>
                        <span>
                            {TEXT.contact[lang].address.city}
                        </span>
                        <span>
                            {TEXT.contact[lang].address.country}
                        </span>
                    </p>
                ) : (
                    <p>
                        {`${TEXT.contact[lang].address.city}, ${TEXT.contact[lang].address.country}`}
                    </p>
                )}
            </li>
        </>

    );

};