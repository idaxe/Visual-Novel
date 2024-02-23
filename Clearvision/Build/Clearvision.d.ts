declare namespace Visualnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        symbol: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        pizza: string;
        drop: string;
    };
    let locations: {
        beachDay: {
            name: string;
            background: string;
        };
        beachNight: {
            name: string;
            background: string;
        };
        test: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        girl1: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        game: {
            name: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        curiosityCounter: number;
        truthseeing: boolean;
    };
}
declare namespace Visualnovel {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Scene2(): ƒS.SceneReturn;
}
