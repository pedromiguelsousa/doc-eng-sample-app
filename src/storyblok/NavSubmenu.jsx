import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function NavSubmenu({ blok, topLevelNav = false }) {

    if (topLevelNav) {
        return (
            <div {...storyblokEditable(blok)} className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id={blok._uid} type="button" className="hs-dropdown-toggle flex items-center w-full text-sm text-navbar-nav-foreground hover:text-primary-hover focus:outline-hidden focus:text-primary-focus" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                    {blok.title}
                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-150 hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 sm:bg-dropdown sm:border sm:border-dropdown-line sm:shadow-md rounded-lg p-1 space-y-1 before:absolute top-full before:-top-5 before:inset-s-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby={blok._uid}>
                    {blok.items.map((item) => (
                        <StoryblokComponent key={item._uid} blok={item} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div {...storyblokEditable(blok)} className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] relative">
                <button id={blok._uid} type="button" className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-dropdown-item-foreground rounded-lg py-2 px-3 hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus">
                    {blok.title}
                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:-rotate-90 sm:-rotate-90 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-150 hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 sm:bg-dropdown sm:border sm:border-dropdown-line sm:shadow-md rounded-lg before:absolute before:-inset-e-5 before:top-0 before:h-full before:w-5 sm:mx-2.5! top-0 inset-e-full" role="menu" aria-orientation="vertical" aria-labelledby={blok._uid}>
                    <div className="p-1 space-y-1">
                        {blok.items.map((item) => (
                            <StoryblokComponent key={item._uid} blok={item} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
