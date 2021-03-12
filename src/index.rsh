'reach 0.1';

export const main =
    Reach.App(
        {},
        [
            Participant('Deployer', {}),
            Participant('Attacher', {})
        ],
        (D, A) => {
            exit();
        }
);