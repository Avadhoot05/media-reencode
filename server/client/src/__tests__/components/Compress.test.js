import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Compress from '../../components/Views/Compress';
import { w3cwebsocket as W3CWebSocket } from "websocket";



describe("Copmpress Page", () => {
    const wsClient = new W3CWebSocket('ws://127.0.0.1:8000');

    it("heading", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
	    const heading = screen.getByText(/Compress Video/i);
	    expect(heading).toBeInTheDocument();
	});

    it("render subheading", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
        const description = screen.getByText("Reduce the video file sizes while maintaining quality, with adjustable compression strength.");
        expect(description).toBeInTheDocument();
    })

    it("render fileinput", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
        const fileInput = screen.getByTestId("file-input");
	    expect(fileInput).toBeInTheDocument();
    })


    it("render compress value slider", () => {
        render(<Compress wsClient = {wsClient}></Compress>);

        const slider = screen.getByTestId("slider");
        expect(slider).toBeInTheDocument();
    })

    it("current default value", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
        const slider = screen.getByTestId("slider").querySelector("input");
        expect(parseInt(slider.value)).toBe(20);
    })

    it("on slider value change", ()=> {
        render(<Compress wsClient = {wsClient}></Compress>);

        const slider = screen.getByTestId("slider").querySelector("input");
        const sliderValueLabel = screen.getByTestId("value-label");

        fireEvent.change(slider, { target: { value: "30" } });
        expect(sliderValueLabel.textContent).toBe("30");
    })

    it("render upload btn", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeInTheDocument();
    })

    it("render upload btn", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeDisabled();
    })


    it("upload btn text", () => {
        render(<Compress wsClient = {wsClient}></Compress>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn.textContent).toBe("upload");
    })

    it('enable btn when valid file is selected', () => {
        render(<Compress wsClient = {wsClient}></Compress>);


		const file = new File([new Blob()], 'test.mp4', {
			type: 'video/mp4',
		});

		const fileInput = screen.getByTestId("file-input");

		fireEvent.change(fileInput, { target: { files: [file] } });
		const uploadBtn = screen.getByTestId("uploadbtn");
        
        waitFor(() => {
			expect(uploadBtn).toBeEnabled();
		}, {
			timeout: 2000, 
			interval: 200
		})

	})
})