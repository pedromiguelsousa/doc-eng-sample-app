import NavEntry from './NavEntry';
import NavSubmenu from './NavSubmenu';

export default function Navbar({ config: configData }) {

    const navBarEntries = configData?.story?.content?.nav_items || [];

    return (
        <header
            className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-navbar border-b border-navbar-line">
            <nav className="max-w-340 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold text-foreground focus:outline-hidden focus:opacity-80"
                        href="#" aria-label="Company, Inc">
                        Company, Inc
                    </a>
                    <div className="sm:hidden">
                        <button type="button"
                            className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example"
                            aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                            <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div id="hs-navbar-example"
                    className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                    aria-labelledby="hs-navbar-example-collapse" role="region">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        {navBarEntries.map((item) => {
                            if (item.items?.length > 0) {
                                return <NavSubmenu key={item._uid} blok={item} topLevelNav={true} />;
                            } else {
                                return <NavEntry key={item._uid} blok={item} topLevelNav={true} />;
                            }
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
