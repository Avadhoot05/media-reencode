import { render, screen } from '@testing-library/react';
import PageHeading from './components/PageHeading';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectionNav from './components/Nav/SelectionNav';



test("selection nav heading and cards", () => {
	render(
		<Router basename="/">
			<Routes>
				<Route path="/" element={<SelectionNav/>}></Route>
			</Routes>
		</Router>
	);
	
	//checks if heading with text ConvertZilla in document 
	const heading = screen.getByTestId("app-heading");
	const headingText = heading.textContent;
	expect(headingText).toBe("ConvertZilla");

	//checks if 4 elements having role gridcell exists
	const actionCards = screen.getAllByRole("gridcell");
	expect(actionCards.length).toBe(4);
})

test('renders Page Heading', () => {
	render(<PageHeading heading='This is heading' description='This is description'/>);
	const heading = screen.getByText(/This is heading/i);
	const description = screen.getByText(/This is description/i);

	expect(heading).toBeInTheDocument();
	expect(description).toBeInTheDocument();
});




