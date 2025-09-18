import React from 'react';

const AsteriskIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 2v20" />
        <path d="M4.22 7.22l15.56 9.56" />
        <path d="M19.78 7.22L4.22 16.78" />
    </svg>
);


// --- Sticky Footer Component ---
const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
    <div className={["container mx-auto max-w-6xl py-10 px-4 md:px-6 lg:px-8 ", className].join(" ")}>{children}</div>
);

interface StickyFooterProps {
  quotes: string;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ quotes }) => (
    <div className="relative h-[400px] bottom-0 left-0 w-full bg-[#8B0000] text-black p-4 md:p-6 lg:p-8 z-50"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
        <div className='relative h-[calc(100vh+300px)] -top-[100vh] bottom-0 left-0 w-full bg-[#8B0000] text-black p-4 md:p-6 lg:p-8 z-50'>
            <div className="h-[300px] bg-[#8B0000] sticky top-[calc(100vh-300px)] container mx-auto flex justify-between items-start py-6">
                 <Container className="flex h-[var(--h)] flex-col justify-between py-10">
                    <div className="flex flex-col items-end gap-4 pt-[50px]">
                        <AsteriskIcon className="h-10 w-10 md:h-12 md:w-12" />
                        <p className="max-w-xs text-right text-sm font-semibold">
                            {quotes}
                        </p>
                    </div>
                    <h1 className="text-[16vw] font-bold leading-none font-black tracking-tighter md:text-[9vw] lg:text-[7vw] self-start pt-[20px]">AKANOMA</h1>
                </Container>
            </div>
        </div>
    </div>
);


export default StickyFooter;

