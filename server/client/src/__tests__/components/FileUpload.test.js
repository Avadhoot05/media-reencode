import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FileUpload from '../../components/FileUpload';


describe('FileUpload input', () => {
    
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
		render(<FileUpload onChangeHandler={()=>{}}/>);

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