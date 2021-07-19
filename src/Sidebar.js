import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SidebarOption from './components/SidebarOption';
import ListAltIcon  from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Sidebar() {
    return (
          <div className="sidebar">
            
                <TwitterIcon/>
                <SidebarOption Icon={HomeIcon} text="Home"/>
                <SidebarOption Icon={ExploreIcon} text="Explore"/>
                <SidebarOption Icon={EmailIcon} text="Messages"/>
                <SidebarOption Icon={BookmarksIcon} text="Bookmark"/>
                <SidebarOption Icon={NotificationsIcon} text="Notification"/>
                <SidebarOption Icon={ListAltIcon} text="Lists"/>
                <SidebarOption Icon={PersonIcon} text="Lists"/>
                <SidebarOption Icon={MoreHorizIcon} text="More"/>
                {/* <SidebarOption Icon={} text=""/> */}

                {/* button tweet */}          
          </div>
    )
}

export default Sidebar;
