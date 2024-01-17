import {createContext} from "react";
import { wsUrl } from "../utils";

import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

export const WS = createContext();

const WSContext = ({children}) => {
    const client = new W3CWebSocket(wsUrl);
    useEffect(function()
  	{
		client.onopen = () => {
			console.log('WebSocket Client Connected');
		};
	}, []);

    return (
        <WS.Provider value={client}>{children}</WS.Provider>
    )
}

export default WSContext;