namespace Visualnovel {
    export async function Chapter1(): ƒS.SceneReturn {
      console.log("Chapter 1 - The Accident");
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
          L0006: "You see " + characters.girl1.name + " exit through the door.",
          L0007: "At that moment you notice a figure enter through the door.",
          L0008: "After a thorough medical exam, I was finally allowed to get some sleep.",
          L0009: "Looks like it's " + characters.girl1.name + ". A close friend from school."
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
          P0010: "Yeah.",
          P0011: "!!!",
          P0012: "You mentioned that others were also involved in the same accident?",
          P0013: "Damn, why did i end up at that place anyways?",
          P0014: "Quite close?",
          P0015: "Groceries huh...",
          P0016: "Damn I can't remember it clearly.",
          P0017: "*An airhead as always.*",
          P0018: "Bye bye.",
          P0019: "*Why would I need rest when I was stuck in a bed for a month*"
        },
        girl1: {
          G0001: "Oh thank god you managed to wake up!",
          G0002: "You were unconcious for a month. I was starting to get truely concerned.",
          G0003: "Take it easy you've just woken up after all.",
          G0004: "Feeling better now?",
          G0005: "I'm sure you're still very confused so let me give you a quick rundown.",
          G0006: "You were.... involved in a major traffic accident.",
          G0007: "I don't know the full details but it seems you and a couple of others fell victim to a drunk truck driver.",
          G0008: "Yes, in total four people including you got injured.",
          G0009: "From what you told me beforehand you said you needed to get groceries.",
          G0010: "Thats the only thing i remember though.",
          G0011: "One of them was also quite close to you.",
          G0012: "Ah it's nothing, you don't have to worry about that.",
          G0013: "Oh",
          G0014: "Seems I completely forgot to mention to the staff that you've woken up.",
          G0015: "On that note I should probably leave now.",
          G0016: "Visit times are almost up and I'm sure you still need some rest.",
          G0017: "Take care."
        },
        nurse: {
          Nu0001: "Excuse me but visiting times are over no-",
          Nu0002: "THE PATIENT HAS FINALLY REGAINED CONCIOUSNESS!!",
          Nu0003: "I need to inform the doctor immedeatly!"
        },
        doctor: {
          D0001: "Ah she was right you are finally awake.",
          D0002: "Now dont worry, I just need to make sure your body functions normally.",
          D0003: "Best case scenario you can go home by tomorrow."
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
      await ƒS.Speech.tell("???", text.girl1.G0001);
      await ƒS.Speech.tell("???", text.girl1.G0002);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0004);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0009);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0008);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0003);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0009);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0005);
      await ƒS.Location.show(locations.hRoomNight);
      await ƒS.update(transition.gradient.duration, transition.gradient.alpha, transition.gradient.edge);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0004);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0010);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0005);
      ƒS.Sound.play(sound.chill, 0.3, true);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0011);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0007);
      await ƒS.Speech.clear();

      let inquire = {
        Others: "There were others involved as well?",
        Self: "What was I doing there?"
      };
      let thoughts = {
        Think: "... ok fine.",
        Sleep: "I want nothing to do with this!"
      };
      let thoughts2 = {
        Indulge: "Kinda",
        Refuse: "Not really"
      };

      let choice;
      let dchoice1;
      let dchoice2;
      choice = await ƒS.Menu.getInput(inquire, "decisionHospital");

      switch(choice) {
        case inquire.Others:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0012);
          await ƒS.Speech.tell(characters.girl1, text.girl1.G0008);
          await ƒS.Speech.tell(characters.girl1, text.girl1.G0011);
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0014);
          await ƒS.Speech.tell(characters.girl1, text.girl1.G0012);
          
          break;
        case inquire.Self:
          await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0013);
          await ƒS.Speech.tell(characters.girl1, text.girl1.G0009);
          await ƒS.Speech.tell(characters.girl1, text.girl1.G0010);
          break;
      }
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0016);
      await ƒS.Speech.tell(characters.nurse, text.nurse.Nu0001);
      await ƒS.Speech.tell(characters.nurse, text.nurse.Nu0002);
      await ƒS.Speech.tell(characters.nurse, text.nurse.Nu0003);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0013);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0014);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0017);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0015);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0016);
      await ƒS.Speech.tell(characters.girl1, text.girl1.G0017);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0018);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0006);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0000);
      await ƒS.Speech.tell(characters.protagonist, text.protagonist.P0019);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0007);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0001);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0002);
      await ƒS.Speech.tell(characters.doctor, text.doctor.D0003);
      await ƒS.Speech.tell(characters.narrator, text.Narrator.L0008);
      //ƒS.Sound.fade();
      ƒS.Speech.hide();
      //start dream sequence
      await ƒS.Location.show(locations.test);
      await ƒS.update(transition.triangle.duration, transition.triangle.alpha, transition.triangle.edge);
      await ƒS.Location.show(locations.dream);
      await ƒS.update(transition.triangle.duration, transition.triangle.alpha, transition.triangle.edge);
      await ƒS.Speech.tell(characters.protagonist, "...");
      await ƒS.Speech.tell(characters.protagonist, "...?");
      await ƒS.Speech.tell(characters.protagonist, "Where am I?");
      await ƒS.Speech.tell("???", "It's the world of your thoughts. Or rather, your dreams.");
      await ƒS.Speech.tell(characters.protagonist, "My... dreams...?");
      await ƒS.Speech.tell("???", "Indeed.");
      await ƒS.Speech.tell("???", "But coming to the real matter at hand.");
      await ƒS.Speech.tell("???", "How about you indulge me in inhabiting your thoughts a little?");
      dchoice1 = await ƒS.Menu.getInput(thoughts, "decisionDream");

      switch (dchoice1){
        case thoughts.Think:
          await ƒS.Speech.tell("???", "Hmmmm.");
          await ƒS.Speech.tell("???", "I see.");
          await ƒS.Speech.tell("???", "Many things have been happening to you my friend.");
          await ƒS.Speech.tell(characters.protagonist.name, "I'm not your friend.");
          await ƒS.Speech.tell("???", "Out cold for a month and that with 3 more people too.");
          await ƒS.Speech.tell("???", "Aren't you curious?");
          dchoice2 = await ƒS.Menu.getInput(thoughts2, "decisionDream2");
          switch (dchoice2) { 
            case thoughts2.Indulge:
              await ƒS.Speech.tell("???", "Four were in a crash but only you were here.");
              await ƒS.Speech.tell("???", "Did the other get better fast or not.");
              await ƒS.Speech.tell("???", "Remember, it's the little things.");
              await ƒS.Speech.tell("???", "Farewell for now then.");
              break;
            case thoughts2.Refuse:
              await ƒS.Speech.tell("???", "Very well.");
              await ƒS.Speech.tell("???", "However, always remember");
              await ƒS.Speech.tell("???", "Time waits for no one.");
              break;
          }
          break;
        case thoughts.Sleep:
          await ƒS.Speech.tell("???", "That so.");
          await ƒS.Speech.tell("???", "Well you don't get a choice in this anyways.");
          await ƒS.Speech.tell("???", "I will take my leave for today.");
          await ƒS.Speech.tell("???", "I'll see you tomorrow.");
          break;
      }
      return "Chapter2";
    }
  }