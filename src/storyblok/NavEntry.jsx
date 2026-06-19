import { storyblokEditable } from '@storyblok/react';

export default function NavEntry({ blok, topLevelNav = false }) {

    if (topLevelNav) {
        return (
            <a {...storyblokEditable(blok)}
                className="text-sm text-navbar-nav-foreground hover:text-primary-hover focus:outline-hidden focus:text-primary-focus"
                href={blok.link.url || "#"}>{blok.title}</a>
        );
    } else {
        return (
            <a {...storyblokEditable(blok)}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-dropdown-item-foreground hover:bg-dropdown-item-hover focus:outline-hidden focus:bg-dropdown-item-focus"
                href={blok.link.url || "#"}>
                {blok.title}
            </a>
        );
    }
}
