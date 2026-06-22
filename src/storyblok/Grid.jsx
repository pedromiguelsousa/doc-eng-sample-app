import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function Grid({ blok }) {
	return (
		<div {...storyblokEditable(blok)} className="my-grid">
			{blok.columns.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
}
