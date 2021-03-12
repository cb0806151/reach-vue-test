import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
    const stdlib = await loadStdlib();
    const initialBalance = stdlib.parseCurrency(10);
    const deployerAccount = await stdlib.newTestAccount(initialBalance);
    const attacherAccount = await stdlib.newTestAccount(initialBalance);

    const ctcDeployer = deployerAccount.deploy(backend);
    const ctcAttacher = attacherAccount.attach(backend, ctcDeployer.getInfo());

    await Promise.all([
        backend.Deployer(ctcDeployer, {
            saysHello: () => {
                console.log(`The deployer says hello`)
            }
        }),
        backend.Attacher(ctcAttacher, {
            saysGoodbye: () => {
                console.log(`The attacher says goodbye`)
            }
        })
    ]);
})();