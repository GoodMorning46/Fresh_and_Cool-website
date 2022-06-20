import * as React from 'react';
import {Navlink} from "react-router-dom";

function Navigation() {
    return (
      <div className="Navigation">
        <Navlink exact to ="/">
            Accueil
        </Navlink>
        <Navlink exact to ="FAQ">   
            FAQ
        </Navlink>
      </div>
    );
  }
  
  export default Navigation;