import { render, screen } from '@testing-library/react';
import PageHeading from './components/PageHeading';
import FileUpload from './components/FileUpload';


test('renders Page Heading', () => {
  render(<PageHeading heading='This is heading' description='This is description'/>);
  const heading = screen.getByText(/This is heading/i);
  const description = screen.getByText(/This is description/i);

  expect(heading).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});


test('renders file upload input', () => {
  render(<FileUpload onChangeHandler={()=>{}}/>);

  const fileInput = screen.getByTestId("file-input");
  expect(fileInput).toBeInTheDocument();
})
