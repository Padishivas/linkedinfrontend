import React from 'react'
import '../styles/myNetwork.scss';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DangerousIcon from '@mui/icons-material/Dangerous';


function MyNetwork(photoURL) {
  return (
    <div className='mynetwork'>

<div className='NetworkSideBar'>
        <div className='networkdata'>
          <h4>Manage my network</h4>
          <div className='networkdatalist'>
            <ul>
                <li><PeopleAltIcon/>
                <span>Connections</span>
                </li>

                <li><PersonIcon/>
                <span>Following & Followers</span>
                </li>

                <li><GroupsIcon/>
                <span>Groups</span>
                </li>

                <li><InsertInvitationIcon/>
                <span>Events</span>
                </li>

                <li><DocumentScannerIcon/>
                <span>Page</span>
                </li>

                <li><NewspaperIcon/>
                <span>NewsLetters</span>
                </li>

                <li><TagIcon/>
                <span>Hastags</span>
                </li>
            </ul>
          </div>

          <p className='showless'>Showless <span><ArrowUpwardIcon/></span></p>
     </div>
    </div>

<div className='bothdivs'>
    <div className='invitation'>
        <div><h4>Invitation</h4></div>
        <hr/>
        <span><img src="https://tse4.mm.bing.net/th?id=OIP.QBfdt4sKIliFwmvNU5RN-gHaEn&pid=Api&P=0&h=180"/>
        <div className='inv-div'>
        <span>
        <p>NewsLetter .Biweekly</p>
        <h5>Linkedin News India <p>invited you to subscribe to </p><b>Linkedin Insider India</b></h5>
        </span>
        <div><button>Ignore</button></div>
        <span>
        <div><button>Accept</button></div>
        </span>
        </div>
        </span>

        <div>
        <span><img src="https://tse4.mm.bing.net/th?id=OIP.QBfdt4sKIliFwmvNU5RN-gHaEn&pid=Api&P=0&h=180"/>
        <div className='inv-div'>
        <span>
        <p>NewsLetter .Biweekly</p>
        <h5>Linkedin News India <p>invited you to subscribe to </p><b>Linkedin Insider India</b></h5>
        </span>
        <div><button>Ignore</button></div>
        <span>
        <div><button>Accept</button></div>
        </span>
        </div>
        </span>
        </div>
        
    </div> 

    <div className='invitationtwo'>
          <div className='invitationtwodiv'>
            <h4>Achive your Goals Faster with Premium <span><DangerousIcon/></span></h4> 
            <p>See who's viewed your profile and directly message members outside of your network</p>
            <button className='premium'>Try Premium For Free</button>
            
          </div>
    </div>

    </div>


    </div>
  )
}

export default MyNetwork;