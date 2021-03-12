'reach 0.1';

export const main =
    Reach.App(
        {},
        [
            Participant('Deployer', {
                saysHello: Fun([], Null),
            }),
            Participant('Attacher', {
                saysGoodbye: Fun([], Null),
            })
        ],
        (D, A) => {

            D.only(() => {
                interact.saysHello(); });

            A.only(() => {
                interact.saysGoodbye(); });

            exit();
        }
);