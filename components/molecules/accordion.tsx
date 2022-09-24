import { ReactElement, useMemo, useState } from "react";

type AccordionProps = {
    title: string;
    children: ReactElement
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [opened, setOpened] = useState(false);

    const isOpened = useMemo(() => opened ? '0' : '180', [opened])

    return (
        <>
            <div className="flex items-center gap-2 " onClick={() => setOpened(!opened)}>
            <svg data-accordion-icon className={`w-6 h-6 rotate-${isOpened} shrink-0`} fill="currentColor" viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clip-rule="evenodd"></path></svg>
                <p className="font-bold text-lg cursor-pointer">{title}</p>
            </div>
            { opened && <div className="pl-2">
                {children}
            </div>}
        </>
    )
}