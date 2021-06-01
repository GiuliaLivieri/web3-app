const accountCooperAddress = 'learn empty exotic film turtle address loud menu try crater defy boil mutual used dentist';
const accountAliceSeed = '5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM';

it('dApp invoche purchase', async function(){
    let item = "item_7BC1qSdY4SAVzsv7U1gnmThnCHoPFHY83yzxBunfhVrr"
    let txObjectSigned = invokeScript({
        dApp: accountCooperAddress,
        call: {
            "function": "purchase",
            "args": [
                {type="string", value: item}
            ]
        },
        payment: [
            {amount: 500000, assetId: null}
        ] 
    }, accountAliceSeed);
    
    let tx = await broadcast(txObjectSigned);
    await waitForTx(tx.id);
});