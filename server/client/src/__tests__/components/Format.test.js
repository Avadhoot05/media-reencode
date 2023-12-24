import { render, screen, fireEvent, waitFor, getByRole } from '@testing-library/react';
import Format from '../../components/Views/Format';
import { w3cwebsocket as W3CWebSocket } from "websocket";

describe("Format page", () => {
    const wsClient = new W3CWebSocket('ws://127.0.0.1:8000');
    it("heading", () => {
        render(<Format wsClient = {wsClient}></Format>);
        const heading = screen.getByText(/Video Format Conversion/i);
        expect(heading).toBeInTheDocument();
    });
        
    it("render subheading", () => {
        render(<Format wsClient = {wsClient}></Format>);
        const description = screen.getByText("Reencode video files by modifying the file format.");
        expect(description).toBeInTheDocument();
    })
    
    it("render fileinput", () => {
        render(<Format wsClient = {wsClient}></Format>);
        const fileInput = screen.getByTestId("file-input");
        expect(fileInput).toBeInTheDocument();
    })

    it("render upload btn", () => {
        render(<Format wsClient = {wsClient}></Format>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeInTheDocument();
    })

    it("upload btn disabled when file not selected", () => {
        render(<Format wsClient = {wsClient}></Format>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeDisabled();
    })


    it("upload btn text", () => {
        render(<Format wsClient = {wsClient}></Format>);
        const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn.textContent).toBe("upload");
    })

    it('enable btn when valid file is selected', () => {
        render(<Format wsClient = {wsClient}></Format>);

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

    it("format option count", ()=> {
        render(<Format wsClient = {wsClient}></Format>);

        const selectEl = screen.getByTestId("format-select");
        const selectInnerBtn = getByRole(selectEl, "button");
        fireEvent.click(selectInnerBtn);

        waitFor(() => {
            const arrOption = screen.getByRole("option");
            expect(arrOption.length).toBe(5);
        }, {
            timeout: 2000, 
            interval: 200
        })
    })

    test("Error text when format is same as selected file", () => {
        render(<Format wsClient = {wsClient}></Format>);
        
        const file = new File([new Blob()], 'test.mp4', {
            type: 'video/mp4',
        });

        const fileInput = screen.getByTestId("file-input");

        fireEvent.change(fileInput, { target: { files: [file] } });


        const selectEl = screen.getByTestId("format-select");
        const selectInnerBtn = getByRole(selectEl, "button");
        fireEvent.click(selectInnerBtn);

        waitFor(() => {
            const mp4Option = screen.getByText(/mp4/i);
            fireEvent.click(mp4Option);
        }, {
            timeout: 2000, 
            interval: 200
        })

        waitFor(() => {
            const errEl = screen.getByText("file is already in selected file format");
            expect(errEl).toBeInTheDocument(); 
            
        }, {
            timeout: 2000, 
            interval: 200
        })

    });


    it("upload btn disabled when file with same format selected as option", () => {
        render(<Format wsClient = {wsClient}></Format>);

        //add mp4 file
        const file = new File([new Blob()], 'test.mp4', {
            type: 'video/mp4',
        });

        const fileInput = screen.getByTestId("file-input");

        fireEvent.change(fileInput, { target: { files: [file] } });

        //select mp4 option from select element
        const selectEl = screen.getByTestId("format-select");
        const selectInnerBtn = getByRole(selectEl, "button");
        fireEvent.click(selectInnerBtn);

        waitFor(() => {
            const mp4Option = screen.getByText(/mp4/i);
            fireEvent.click(mp4Option);
        }, {
            timeout: 2000, 
            interval: 200
        })

        //check is btn is disabled
        waitFor(() => {
            const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeDisabled();
        }, {
            timeout: 2000, 
            interval: 200
        })
    })

    it("upload btn enabled when file with different format selected as option", () => {
        render(<Format wsClient = {wsClient}></Format>);

        //add mp4 file
        const file = new File([new Blob()], 'test.mp4', {
            type: 'video/mp4',
        });

        const fileInput = screen.getByTestId("file-input");

        fireEvent.change(fileInput, { target: { files: [file] } });

        //select mp4 option from select element
        const selectEl = screen.getByTestId("format-select");
        const selectInnerBtn = getByRole(selectEl, "button");
        fireEvent.click(selectInnerBtn);

        waitFor(() => {
            const mp4Option = screen.getByText(/mov/i);
            fireEvent.click(mp4Option);
        }, {
            timeout: 2000, 
            interval: 200
        })

        //check is btn is disabled
        waitFor(() => {
            const uploadBtn = screen.getByTestId("uploadbtn");
        expect(uploadBtn).toBeEnabled();
        }, {
            timeout: 2000, 
            interval: 200
        })
        
    })
})