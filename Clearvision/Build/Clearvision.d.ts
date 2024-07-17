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
    function Endings(): ƒS.SceneReturn;
}
declare namespace Visualnovel {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        side: {
            duration: number;
            alpha: string;
            edge: number;
        };
        slide: {
            duration: number;
            alpha: string;
            edge: number;
        };
        gradient: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dreamEnter: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dreamExit: {
            duration: number;
            alpha: string;
            edge: number;
        };
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        star: {
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
        homeDay: {
            name: string;
            background: string;
        };
        homeNight: {
            name: string;
            background: string;
        };
        lab: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
        classroom: {
            name: string;
            background: string;
        };
        hallway: {
            name: string;
            background: string;
        };
        town: {
            name: string;
            background: string;
        };
        festival: {
            name: string;
            background: string;
        };
        void: {
            name: string;
            background: string;
        };
        ending1: {
            name: string;
            background: string;
        };
        ending2: {
            name: string;
            background: string;
        };
        ending3: {
            name: string;
            background: string;
        };
        ending4: {
            name: string;
            background: string;
        };
        ending5: {
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
    let customPositions: {
        slightleft: ƒ.Vector2;
        farleft: ƒ.Vector2;
        slightright: ƒ.Vector2;
        farright: ƒ.Vector2;
        backgroundleft: ƒ.Vector2;
        slscare: ƒ.Vector2;
    };
    let animations: {
        outLeft: string;
        outRight: string;
        inLeft: string;
        inRight: string;
        goInLeft: string;
        goInRight: string;
        comeCloser: string;
        stepBack: string;
        scare: string;
        scareBack: string;
    };
    function animate(_animation: string): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        curiosityCounter: number;
        truthseeing: boolean;
        curChapter: number;
        Ending: number;
    };
}
