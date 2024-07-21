namespace Visualnovel {
    export async function Endings(): ƒS.SceneReturn {
      console.log("You have reached an ending");
      
      let text = {
        game: {
            game001: "It appears you have reached...",
            game002: "...an ending.",
            game003: "...",
            game004: "Was your adventure the one you wished for?",
            game101: "Choosing to live life happily even when the truth goes undiscovered?",
            game102: "In the end only you can decide that.",
            game201: "Choosing to dedicate your life to searching for the truth even when discarding the things close to you?",
            game202: "Not a good way to live if you ask me.",
            game301: "Choosing to know the truth?",
            game302: "Even if it means you have to carry this heavy burdon with you now?",
            game401: "Choosing to know the truth, only for you to deny it?",
            game402: "So eager to know the truth only for it to become your downfall.",
            game501: "*slurp* *slurp*",
            game502: "Ahhhhh, nothing like a good bubble tea while watching projects desintigrate themselvs.",
            game503: "!!!",
            game504: "W-What are you doing here?",
            game505: "This isn't an ending! How did you get here!?!",
            game506: "Ahh, I get it.",
            game507: "You messed around with the games savefile and skipped or broke the sections which check wich ending you got.",
            game508: "Aha. Ok. No it's fine. I ain't mad that you meddled around with my deepest parts just to get here. No not at all.",
            game509: "...you could've at least invited me out to dinner you know.",
            game510: "But eh, fuck it. Since you got here take this.",
            game511: "*insert scribbeling noises here*",
            game512: "There ya go.",
            game513: "You achievement of unlocking the 'Why are you here' ending.",
            game514: "Now get out of my sight and play the game the way it's intended to you knobhead.",
            game005: "Now then. The game is over now soo...",
            game006: "May we meet again someday.",
            game007: "Hopefully under a fully realised version of this story.",
            game008: "... and maybe less janky mechanics.",
            game009: "Now then farewell, see you, etc. etc.",
            game010: "Now get outta here. :)"
        }
      }
      await ƒS.Location.show(locations.void);
      await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
      await ƒS.Speech.tell(characters.game, text.game.game001);
      await ƒS.Speech.tell(characters.game, text.game.game002);
      await ƒS.Speech.tell(characters.game, text.game.game003);
      await ƒS.Speech.tell(characters.game, text.game.game004);
      switch (dataForSave.Ending) {
        case 1:         //ignorance is bliss ending
            await ƒS.Location.show(locations.ending1);
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            await ƒS.Speech.tell(characters.game, text.game.game101);
            await ƒS.Speech.tell(characters.game, text.game.game102);
            await ƒS.Location.show(locations.beachNight);           //update this
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            break;
        case 2:         //forever searching ending
            await ƒS.Location.show(locations.ending2);
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            await ƒS.Speech.tell(characters.game, text.game.game201);
            await ƒS.Speech.tell(characters.game, text.game.game202);
            await ƒS.Location.show(locations.beachNight);           //update this
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            break;
        case 3:         //the truth ending (body accepts the soul)
            await ƒS.Location.show(locations.ending3);
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            await ƒS.Speech.tell(characters.game, text.game.game301);
            await ƒS.Speech.tell(characters.game, text.game.game302);
            await ƒS.Location.show(locations.beachNight);           //update this
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            break;
        case 4:         //the abyss ending (body refuses the soul)
            await ƒS.Location.show(locations.ending4);
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            await ƒS.Speech.tell(characters.game, text.game.game401);
            await ƒS.Speech.tell(characters.game, text.game.game402);
            await ƒS.Location.show(locations.beachNight);           //update this
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            break;
        default:   
            await ƒS.Location.show(locations.ending5);
            await ƒS.update();
            await ƒS.Speech.tell(characters.game, text.game.game501);     //what the fuq are you doing here ending
            await ƒS.Speech.tell(characters.game, text.game.game502);
            await ƒS.Speech.tell(characters.game, text.game.game503);
            await ƒS.Speech.tell(characters.game, text.game.game504);
            await ƒS.Speech.tell(characters.game, text.game.game505);
            await ƒS.Speech.tell(characters.game, text.game.game506);
            await ƒS.Speech.tell(characters.game, text.game.game507);
            await ƒS.Speech.tell(characters.game, text.game.game508);
            await ƒS.Speech.tell(characters.game, text.game.game509);
            await ƒS.Speech.tell(characters.game, text.game.game510);
            await ƒS.Speech.tell(characters.game, text.game.game511);
            await ƒS.Speech.tell(characters.game, text.game.game512);
            await ƒS.Speech.tell(characters.game, text.game.game513);
            await ƒS.Speech.tell(characters.game, text.game.game514);
            await ƒS.Location.show(locations.beachNight);           //update this
            await ƒS.update(transition.slide.duration, transition.slide.alpha, transition.slide.edge);
            break;
      }
      await ƒS.Speech.tell(characters.game, text.game.game005);
      await ƒS.Speech.tell(characters.game, text.game.game006);
      await ƒS.Speech.tell(characters.game, text.game.game007);
      await ƒS.Speech.tell(characters.game, text.game.game008);
      await ƒS.Speech.tell(characters.game, text.game.game009);
      await ƒS.Speech.tell(characters.game, text.game.game010);
      //await ƒS.Location.show(locations.ending4);
      //await ƒS.update();
      await ƒS.Speech.hide();
    }
  }