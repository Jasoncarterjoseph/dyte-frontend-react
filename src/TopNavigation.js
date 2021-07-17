import React from "react";
import "./index.css";
import { faCloud, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
function TopNavigation(props)
{
    function sharebuttonclick()
    {
        // Simple POST request with a JSON body using fetch
        alert(props.value);
        const details = {
            api_dev_key: 'DbcFvnYxtQ0sjlzmBbXPFZzBzI_FanIn',
            api_option: 'paste',
            api_paste_code: 'test'
        };
       // POST request using axios with set headers
        const headers = { 
            'Access-Control-Allow-Origin': '*',       
            'Accept':'*',      
            'Content-Type':'application/x-www-form-urlencoded'

             };
        axios.post('https://pastebin.com/api/api_post.php', details, { headers })
            .then(response => alert("Success"))
            .catch(error => {
                alert('There was an error!'+error);
            });
       


        // body: { api_dev_key:'DbcFvnYxtQ0sjlzmBbXPFZzBzI_FanIn',api_option:'paste',api_paste_code:'test' }
    };
  


return (
    <div>
      <div className="mainheader">
        <div className="right">
          <div className="text">
            <h2>
              Code Editor {"\u00A0"}
              <FontAwesomeIcon size="s" color="#fff" icon={faCode} />
            </h2>
          </div>
        </div>
        <div>
          <br />
          <div className="buttons">
            
              <button className="Topbutton1" onClick={() => sharebuttonclick()}>
                <FontAwesomeIcon color="#ADAFBC" icon={faCloud} />{"\u00A0"}
                SHARE
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default  TopNavigation;
