# Video Processing Web Application

This project is a web application designed for video processing tasks. It provides a user-friendly interface for users to upload video files and perform various actions such as format conversion, compression, resolution change, and FPS adjustment. Real-time progress updates during video processing are enabled through WebSocket integration.

## Technologies Used

- **Frontend**: React, TypeScript
- **Backend**: Express, Node.js
- **Storage**: AWS S3
- **Video Processing**: Ffmpeg
- **Testing**: Jest, react-testing-library

## Features

- User-friendly interface for uploading and processing video files
- Support for various video processing tasks
- Real-time progress updates during processing
- Test coverage using Jest and react-testing-library

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Avadhoot05/media-reencode.git
```

2. Install dependencies for both frontend and backend:

```bash
cd client
npm install

cd server
npm install
```

3. Set up AWS S3 bucket for storing video files and update configuration accordingly.

4. Configure Ffmpeg library for video processing tasks.

5. Start the backend server:

```bash
cd server
npm start
```

6. Start the frontend development server:

```bash
cd client
npm start
```


## Usage

- Upon accessing the application, users can upload their video files.
- Select desired actions for video processing.
- Monitor real-time progress updates during processing.
- Download processed videos once the tasks are completed.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
