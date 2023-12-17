import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PageHeading from './components/PageHeading';
import FileUpload from './components/FileUpload';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectionNav from './components/Nav/SelectionNav';
import Compress from './components/Views/Compress';
import { w3cwebsocket as W3CWebSocket } from "websocket";



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


test("compress page", () => {
	render(<Compress wsClient = {new W3CWebSocket('ws://127.0.0.1:8000')}></Compress>);
	const heading = screen.getByText(/Compress Video/i);
	expect(heading).toBeInTheDocument();

	const description = screen.getByText("Reduce the video file sizes while maintaining quality, with adjustable compression strength.");
	expect(description).toBeInTheDocument();
	
	const fileInput = screen.getByTestId("file-input");
	expect(fileInput).toBeInTheDocument();
})

describe('FileUpload', () => {
    
	it('Rendering file input', () => {
		render(<FileUpload onChangeHandler={()=>{}}/>);

		const fileInput = screen.getByTestId("file-input");
		expect(fileInput).toBeInTheDocument();
	})

	it('Valid file type as video should display the selected file name', () => {
		render(<FileUpload onChangeHandler={()=>{}}/>);

		const file = new File([new Blob()], 'test.mp4', {
			type: 'video/mp4',
		});

		const fileInput = screen.getByTestId("file-input");

		fireEvent.change(fileInput, { target: { files: [file] } });
		expect(fileInput.files.length).toBe(1);
	})


	it('invalid file type(other than video)', () => {
		render(<FileUpload onChangeHandler={jest.fn()}/>);

		const fileInput = screen.getByTestId("file-input");

		const textFile = new File(['test file content'], 'test.txt', {
			type: 'text/plain',
		});
		fireEvent.change(fileInput, { target: { files: [textFile] } });
		
		waitFor(() => {
			expect(fileInput.files.length).toBe(0);
		}, {
			timeout: 2000, 
			interval: 200
		})
	})
});



test('renders Page Heading', () => {
	render(<PageHeading heading='This is heading' description='This is description'/>);
	const heading = screen.getByText(/This is heading/i);
	const description = screen.getByText(/This is description/i);

	expect(heading).toBeInTheDocument();
	expect(description).toBeInTheDocument();
});




