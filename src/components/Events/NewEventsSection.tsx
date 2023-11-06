import { useQuery } from "@tanstack/react-query";

import LoadingIndicator from "../UI/LoadingIndicator.tsx";
import ErrorBlock from "../UI/ErrorBlock.tsx";
import EventItem from "./EventItem.tsx";

import { fetchEvents } from "../../util/http.ts";

export default function NewEventsSection() {
	const { data, isPending, isError, error } = useQuery({
		queryKey: ["events"],
		queryFn: fetchEvents,
		staleTime: 5000,
		// gcTime: 1000
	});

	let content;

	if (isPending) {
		content = <LoadingIndicator />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				title='An error occurred'
				message={error.info?.message || "Failed to fetch events."}
			/>
		);
	}

	if (data) {
		content = (
			<ul className='events-list'>
				{data.map(event => (
					<li key={event.id}>
						<EventItem event={event} />
					</li>
				))}
			</ul>
		);
	}

	return (
		<section className='content-section' id='new-events-section'>
			<header>
				<h2>Recently added events</h2>
			</header>
			{content}
		</section>
	);
}
