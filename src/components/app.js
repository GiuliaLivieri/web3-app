import ReactDOM from "react-dom";
import React from 'react';
import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';
// import Provider from "@waves.exchange/provider-web";

const signer = new Signer({NODE_URL: 'https://pool.testnet.wavesnodes.com'});
signer.setProvider(new ProviderWeb('https://testnet.waves.exchange/signer/'))

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc() {
        // setting the TestNet Signer
        // setting the Waves.Exchange provider
        // waves.setProvider(provider);

        const userData = signer.login();
        console.error(userData.address);
    }
    render() {
        return (
            <>
            <div className="container">
    		    <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
    	    </div>
            </>
        );
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}


