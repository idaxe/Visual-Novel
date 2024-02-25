namespace Visualnovel {
    export async function Chapter1(): ƒS.SceneReturn {
      console.log("Prolog");

      let protagName: string = "";

      let text = {
        game: {
          Hi: "I sense...",
          How: "a new presence",
          Are: "You must be a new player.",
          You: "It has been ages since my creator actually showed his face around here so I thought I was doomed to corrupt in this repository forever..",
          Doing: "Ah well, since I'm programmed this way and I cant go against it i might as well fufill my role.",
          Presence: "What do you want to call the protagonist of this story?",
          //Pname: "So " + characters.protagonist.name + " it is.",
          Confirmation: "Interesting. Very Interesting", //maybe include the protags name in there
          Start: "Very well",
          Really: "Now then, enjoy the story......I guess"
        },
        Narrator: {
          L0001: "You slowly try to open your eyes.",
          L0002: "It's bright enough to hurt your eyes.",
          L0003: "After a while you begin to process the details of the room.",
          L0004: "Only now you notice a female figure is sitting by your bed.",
          L0005: "After a short while you finally regain conciousness completely",
          L0006: "",
          L0007: "",
          L0008: "",
          L0009: "",
          L0010: ""
        },
        protagonist: {
          P0000: "...",
          P0001: "Its so dark.",
          P0002: "...",
          P0003: "My head hurts.",
          P0004: "Where... am I?",
          P0005: "Is this...",
          P0006: "A hopital room?",
          P0007: "Why am I-",
          P0008: "Wait what? ...why was I...",
          P0009: "...ok.",
          P0010: "Yeah."
        },
        girl1: {
          G0001: "Oh thank god you managed to wake up!",
          G0002: "You were unconcious for a month. I was starting to get truely concerned.",
          G0003: "Take it easy you've just woken up after all.",
          G0004: "Feeling better now?",
          G0005: "I'm sure you're still very confused so let me give you a quick rundown.",
          G0006: "You were.... involved in a major traffic accident."
        }
      }
      await ƒS.Speech.tell(characters.game, text.game.Hi);
      await ƒS.Speech.tell(characters.game, text.game.How);
      await ƒS.Speech.tell(characters.game, text.game.Are);
      await ƒS.Speech.tell(characters.game, text.game.You);
      await ƒS.Speech.tell(characters.game, text.game.Doing);
      await ƒS.Speech.tell(characters.game, text.game.Presence);
      protagName = await ƒS.Speech.getInput();
      dataForSave.nameProtagonist = protagName;
      characters.protagonist.name = protagName;
      await ƒS.Speech.tell(characters.game, "So " + protagName + " it is."); //didnt show the name if used from text
      await ƒS.Speech.tell(characters.game, text.game.Confirmation);
      await ƒS.Speech.tell(characters.game, text.game.Start);
      await ƒS.Speech.tell(characters.game, text.game.Really);
      ƒS.Speech.clear();
      await ƒS.Location.show(locations.dream);
      await ƒS.update(transition.triangle.duration, transition.triangle.alpha, transition.triangle.edge);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0001);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0001);
      await ƒS.Location.show(locations.hRoomNightAlt);
      await ƒS.update(transition.gradient.duration, transition.gradient.alpha, transition.gradient.edge);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0005);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0007);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0001);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0005);
      await ƒS.Location.show(locations.hRoomNight);
      await ƒS.update(transition.gradient.duration, transition.gradient.alpha, transition.gradient.edge);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      await ƒS.Sound.play(sound.chill, 0.3, true);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);







      //await ƒS.Location.show(locations.hRoomNightAlt);
      //ƒS.Speech.hide();
      //await ƒS.Location.show(locations.hRoomNight);
      //await ƒS.update(transition.symbol.duration, transition.symbol.alpha, transition.symbol.edge);
      //console.log("fuck");
      //await ƒS.update();
      //console.log("this");
      //await ƒS.update(transition.symbol.duration, transition.symbol.alpha, transition.symbol.edge);
    }
  }