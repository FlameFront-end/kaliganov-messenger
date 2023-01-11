import React from "react";
import {ChannelList, useChatContext} from "stream-chat-react";

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from "./"
import Cookies from "universal-cookie";
import Icon from '../assets/icon.png'
import LogoutIcon from '../assets/logout.png'


// Иконка чата и выхода
const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={Icon} width='30'/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} width='30'/>
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__">
            CHAT
        </p>
    </div>
)

function ChannelListContainer() {
    return (
        <>
            <SideBar/>
            <div className="channel-list__list__wrapper">
                <CompanyHeader/>
                <ChannelSearch/>
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='team'
                        />
                    )}
                />
            </div>
        </>
    )
}
export default ChannelListContainer