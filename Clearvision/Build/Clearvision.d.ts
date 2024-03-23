declare namespace Visualnovel {
    function Chapter1(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Chapter2(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Chapter3(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Chapter4(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Chapter5(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Chapter6(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    function Chapter7(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        symbol: {
            duration: number;
            alpha: string;
            edge: number;
        };
        triangle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        gradient: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        pizza: string;
        chill: string;
        dream: string;
        drop: string;
        clue: string;
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
        dream: {
            name: string;
            background: string;
        };
        hRoomNightAlt: {
            name: string;
            background: string;
        };
        hRoomNight: {
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
        girl2: {
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
        doctor: {
            name: string;
        };
        nurse: {
            name: string;
        };
        friend: {
            name: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        curiosityCounter: number;
        truthseeing: boolean;
    };
}
