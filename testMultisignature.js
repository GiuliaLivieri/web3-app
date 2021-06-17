
const accountAliceSeed = "seed"
const accountBobSeed = "seed"
const accountBobAddress = "hoge"
const FEE = 500000

it('multisig transfer', async function() {
    let txObjectSignedAlice = transfer({amount: 100000, recipient: accountBobAddress, fee:FEE}, accountAliceSeed)
    let txObjectSignedAliceBob = transfer(txObjectSignedAlice, accountBobSeed)
    let tx = await broadcast(txObjectSignedAliceBob)
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx))
})