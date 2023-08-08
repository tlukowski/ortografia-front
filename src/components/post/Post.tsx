import React from "react";

const specialCharacters = [
  {
    character: "ż",
    replacement: ["ż", "rz"],
  },
  {
    character: "Ż",
    replacement: ["Ż", "Rz"],
  },
  {
    character: "rz",
    replacement: ["rz", "ż"],
  },
  {
    character: "Rz",
    replacement: ["Rz", "Ż"],
  },
];

const SpecialComponent = ({ specialCharacters }) => {
  return (
    <div className="inline-flex flex-col">
      {specialCharacters.map((replacementText: any, index: number) => (
        <div key={index}>
          {replacementText.replacement.map((replacement: any, subIndex: number) => (
            <div
              key={subIndex}
              className="border p-1 cursor-pointer hover:bg-slate-600 hover:text-white transition-colors"
            >
              {replacement}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const parseTextWithSpecialCharacter = (text: string) => {
  let parts = text.split("ż");
  const parsedParts = parts.map((part, index) => {
    if (index !== parts.length - 1) {
      return (
        <React.Fragment key={index}>
          {part}
          <SpecialComponent specialCharacters={specialCharacters} />
        </React.Fragment>
      );
    }
    return part;
  });
  return parsedParts;
};

const Postxd = () => {
  const data =
    "Przedwczoraj przyszła do mnie koleżanka z klasy o imieniu Żaneta. Razem czytałyśmy/czytaliśmy książkę o zwierzętach, a potem byłyśmy/byliśmy na spacerze w parku, gdzie rosną bardzo stare drzewa i kwitną zielone krzewy. Przez dłuższy czas siedziałyśmy/siedzieliśmy na ławce i patrzyłyśmy/patrzyliśmy na przelatujące po niebie ptaki. Nagle usłyszałyśmy/usłyszeliśmy grzmot i przestraszyłyśmy/przestraszyliśmy, że zbliża się burza. Rzeczywiście po chwili zaczął padać deszcz, a grzmoty stawały się coraz głośniejsze. Uciekłyśmy przed burzą do najbliższego sklepu";
  const parsedOutput = parseTextWithSpecialCharacter(data);
  return <div>{parsedOutput}</div>;
};

export { Postxd };
