import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm";
import { createNewEvent } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";

export default function NewEvent() {


	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: createNewEvent,
	});

	function handleSubmit(formData) {
		mutate({ event: formData });
	}

	return (
		<Modal>
			<EventForm onSubmit={handleSubmit}>
				{isPending && "Submitting..."}
				{!isPending && (
					<>
						<Link to='../' className='button-text'>
							Cancel
						</Link>
						<button type='submit' className='button'>
							Create
						</button>
					</>
				)}
			</EventForm>
			{isError && (
				<ErrorBlock
					title='Failed to create event'
					message={
						error.info?.message ||
						"Failed to create event. Please check your inputs and try again later."
					}
				/>
			)}
		</Modal>
	);
}
