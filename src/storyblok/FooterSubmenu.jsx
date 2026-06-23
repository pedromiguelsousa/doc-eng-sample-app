import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function FooterSubmenu({ blok, topLevelNav = true }) {

    if (topLevelNav) {
        return (
            <div {...storyblokEditable(blok)} className="mb-4">
                <p className="text-sm mb-3 font-medium">{blok.title}</p>
                {blok.items?.length > 0 && (
                    <ul className="grid gap-y-1">
                        {blok.items.map((item) => (
                            <StoryblokComponent key={item._uid} blok={item} />
                        ))}
                    </ul>
                )}
            </div>
        );
    } else {
        // Currently not used in footer.
        // When implementing nested footer submenus, change topLevelNav's default value to false.
        return null;
    }
}
