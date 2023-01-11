import React from 'react'
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { ChannelListContaniner, ChannelContaniner } from './components';
import './App.css'

const apiKey = '1228697'

const client = StreamChat.getInstance(apiKey)
function App() {
	return (
		<div className='app__wrapper'>
			<Chat client={client}>
				<ChannelListContaniner

				/>
				<ChannelContaniner

				/>
			</Chat>
		</div>
	)
}

export default App