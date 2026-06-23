import { storyblokEditable } from '@storyblok/react';

export default function FooterEntry({ blok, topLevelNav = false }) {

    let url = (blok.link?.linktype == "story") ? `/${blok.link.cached_url}` : (blok.link?.url || "#");

    if (topLevelNav) {
        return (
            <div className="mb-4" {...storyblokEditable(blok)}>
                <p className="text-sm mb-3 font-medium "><a className="underline-offset-4 hover:underline focus:outline-hidden focus:underline" href={url}>▶ {blok.title}</a></p>
            </div>
        );
    } else {
        return (
            <li {...storyblokEditable(blok)}>
                <a className="text-sm text-gray-500 underline-offset-4 hover:underline focus:outline-hidden focus:underline" href={url}>{blok.title}</a>
            </li>
        );
    }
}
