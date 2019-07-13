import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import InnerTopMenuWrap from './common/InnerTopMenu';
import InnerLeftMenuWrap from './common/InnerLeftMenu';
import MyAccount from './MyAccount';
import EditProfile from './EditProfile';
import EditSchool from './EditSchool';
import ChangePassword from './ChangePassword';

class UserDashboard extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);   
    
  }

  handleTabChange(event) 
  { 
    const tabName = event.target.title;    
    switch(tabName)
    {
      case 'editProfile':
        ReactDOM.render(<EditProfile />, document.getElementById('middleContainer'));
        break;

      case 'editSchool':
        ReactDOM.render(<EditSchool />, document.getElementById('middleContainer'));
        break;

      case 'changePassword':
        ReactDOM.render(<ChangePassword />, document.getElementById('middleContainer'));
        break;

      case 'myAccount':
        ReactDOM.render(<MyAccount />, document.getElementById('middleContainer'));       
        break;     
    }
    
  }
   render() {
    let leftMenuArray = [
                          {name:'My Account',type:'tab',href:'', menuClass:'glyphicon glyphicon-user', tabName:'myAccount'},
                          {name:'Edit profile',type:'tab',href:'', menuClass:'glyphicon glyphicon-edit', tabName:'editProfile'},
                          {name:'Edit School Info',type:'tab',href:'', menuClass:'glyphicon glyphicon-edit', tabName:'editSchool'},
                          {name:'Change password',type:'tab',href:'', menuClass:'glyphicon glyphicon-lock', tabName:'changePassword'},
                          {name:'Privacy policy',type:'link',href:'/privacy', menuClass:'resp-tab-item', tabName:'privacy'},
                          {name:'Terms & Conditions',type:'link',href:'/terms', menuClass:'resp-tab-item', tabName:'terms'}
                        ];
    let leftMenuStr = JSON.stringify(leftMenuArray);     
      return (      
            <section  className="about-section  text-center   privacy-mar">
            <div className="container">
              <div className="">
                <div className="about-feat text-left absout-left">
                  <div className="col-lg-12 col-md-12  col-xs-12">
                    <div className="feature-list featured-right">
                    <InnerTopMenuWrap/>
                      <div>
                        <div className="row">
                          <div className="col-md-3">
                            <ul className="nav nav-pills nav-stacked admin-menu"  >                        
                              <InnerLeftMenuWrap menuList={leftMenuStr} forClick={this.handleTabChange}/>                            
                            </ul>
                          </div>                        
                              <div id="middleContainer">
                              <MyAccount />                                                    
                          </div>
                        </div>
                      </div>                 
                    </div>
                  </div>
                </div>
              </div>
            </div>        
          </section>
      );
   }
}
export default UserDashboard;