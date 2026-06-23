import {
	StoryblokComponent,
	useStoryblok,
	useStoryblokApi,
} from '@storyblok/react';
import { useParams, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { HSStaticMethods } from "preline/non-auto";
import Navbar from './storyblok/Navbar';
import Footer from './storyblok/Footer';

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
			});
			setConfigData(resp.data);
		}
		loadConfig();
	}, [storyblokApi]);

	const story = useStoryblok(slug || 'home', {
		version: 'draft',
	});

	useEffect(() => {
		HSStaticMethods.autoInit();
	}, [location.pathname, story?.content]);

	if (!story?.content) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Navbar config={configData} />
			<StoryblokComponent blok={story.content} />
			<Footer config={configData} />
		</>
	);
}
