import {
	StoryblokComponent,
	useStoryblok,
	useStoryblokApi,
} from '@storyblok/react';
import { useParams, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import NavBar from './storyblok/Navbar';

import { HSStaticMethods } from "preline/non-auto";

export default function App() {
	const { '*': slug } = useParams();
	const location = useLocation();

	const [configData, setConfigData] = useState(null);

	// header/footer loader
	const storyblokApi = useStoryblokApi();
	useEffect(() => {
		async function loadConfig() {
			const resp = await storyblokApi.get('cdn/stories/config', {
				version: 'draft',
				// resolve_links: 'url',
			});
			setConfigData(resp.data);
		}
		loadConfig();
	}, [storyblokApi]);

	const story = useStoryblok(slug || 'home', {
		version: 'draft',
	});

	// UI config — must run after the Navbar markup is in the DOM,
	// so we depend on story.content (not just location.pathname).
	useEffect(() => {
		HSStaticMethods.autoInit();
	}, [location.pathname, story?.content]);

	if (!story?.content) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<NavBar config={configData} />
			<StoryblokComponent blok={story.content} />
		</>
	);
}
