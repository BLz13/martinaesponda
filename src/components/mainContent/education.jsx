import { Fragment, useEffect, useState } from "react";

import ChevronDownIcon from "../../assets/svg/chevron-down.svg?react";

export default function Education({ data, sectionName }) {

    const [, ...dataset] = data ?? [];

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

    return (
        <>
            <h2>
                <strong>{sectionName} :</strong>
            </h2>

            <ul>
                {dataset?.map((ed, i) => {

                    const key = `education-${ed?.place}-${i}`;
                    const isLast = i === dataset.length - 1;

                    return (
                        <Fragment key={key}>
                            <li>
                                <h3>{ed?.title}</h3>
                                {ed?.institution ? <p>{ed.institution}</p> : null}
                                {ed?.status ? <p>{ed.status}</p> : null}

                                {isMobile ? (
                                    <>
                                        <p>
                                            <p><strong>{ed?.place}</strong></p>
                                            <p>{ed?.site}</p>
                                        </p>
                                        <p>
                                            <span>{ed?.timeSince}</span>
                                            <ChevronDownIcon />
                                            <span>{ed?.timeTo}</span>
                                        </p>
                                    </>
                                ):(
                                    <>
                                        {ed?.site ? (
                                            <p><strong>{ed?.place}</strong> - {ed?.site}</p>
                                        ) : (
                                            <p>{ed?.place}</p>
                                        )}
                                        {ed?.timeTo ? (
                                            <p>{ed?.timeSince} - {ed?.timeTo}</p>
                                        ) : (
                                            <p>{ed?.timeSince}</p>
                                        )}
                                    </>
                                )}
                                
                            </li>

                            {!isLast && (
                                <hr className="separator" />
                            )}
                        </Fragment>
                    );

                })}
            </ul>
        </>
    );
}