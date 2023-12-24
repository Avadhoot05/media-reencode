import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Fps from '../../components/Views/Fps';
import { w3cwebsocket as W3CWebSocket } from "websocket";



describe("Copmpress Page", () => {
    const wsClient = new W3CWebSocket('ws://127.0.0.1:8000');
    it("heading", () => {
        render(<Fps wsClient = {wsClient}></Fps>);
	    const heading = screen.getByText(/Video FPS Reencoding/i);
	    expect(heading).toBeInTheDocument();
	});

    it("render subheading", () => {
        
        render(<Fps wsClient = {wsClient}></Fps>);
        const description = screen.getByText("Reencode video files by adjusting the Frames Per Second (FPS) value.");
        expect(description).toBeInTheDocument();
    })

    it("render fileinput", () => {
        render(<Fps wsClient = {wsClient}></Fps>);
        const fileInput = screen.getByTestId("file-input");
	    expect(fileInput).toBeInTheDocument();
    })


    it("render FPS input field", () => {
        render(<Fps wsClient = {wsClient}></Fps>);

        const fpsInputEl = screen.getByTestId("fps-input");
        expect(fpsInputEl).toBeInTheDocument();
    })

    it("negative fps value and above 240 value", () => {
        render(<Fps wsClient = {wsClient}></Fps>);
        const fpsInput = screen.getByTestId("fps-input").querySelector("input");

        fireEvent.change(fpsInput,{target : {value: -1}});

        waitFor(()=>{
            const errText = screen.getByText(/Please enter a positive number/i);
            expect(errText).toBeInTheDocument();
        }, 
        {
            timeout: 2000, 
            interval: 200
        });

        fireEvent.change(fpsInput,{target : {value: 340}});

        waitFor(()=>{
            expect(parseInt(fpsInput.value)).toBe(240);
        }, 
        {
            timeout: 2000, 
            interval: 200
        });
    })


    it("render upload btn", () => {
        render(<Fps wsClient = {wsClient}></Fps>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeInTheDocument();
    })

    it("disabled upload btn", () => {
        render(<Fps wsClient = {wsClient}></Fps>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeDisabled();
    })


    it("upload btn text", () => {
        render(<Fps wsClient = {wsClient}></Fps>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn.textContent).toBe("upload");
    })

    it('enable btn when valid file is selected', () => {
        render(<Fps wsClient = {wsClient}></Fps>);


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