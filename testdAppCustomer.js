const accountCooperAddress = 'learn empty exotic film turtle address loud menu try crater defy boil mutual used dentist';
const accountAliceSeed = '5AzfA9UfpWVYiwFwvdr77k6LWupSTGLb14b24oVdEpMM';

it('dApp invoche purchase', async function(){
    let txObjectSigned = invokeScript({
        dApp: accountCooperAddress,
        call: {
            "function": "purchase",
            "args": []
        },
        payment: [
            {amount: 500000, assetId: null}
        ] 
    }, accountAliceSeed);
    
    let tx = await broadcast(txObjectSigned);
    await waitForTx(tx.id);
});