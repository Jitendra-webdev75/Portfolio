import TextType from "./TextType";

function TypingEffect({text1,text2,text3}) {
  return (
    <>
      <TextType
        text={[text1, text2, text3 ]}
        typingSpeed={80}
        pauseDuration={1800}
        showCursor
        cursorCharacter="_"
        texts={[
          "Welcome to React Bits! Good to see you!",
          "Build some amazing experiences!",
        ]}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
      />
    </>
  );
}

export default TypingEffect;
