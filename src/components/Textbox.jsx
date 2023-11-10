import {
  Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

export default function CommentBoxTextarea() {
  const [text, setText] = useState();
  let textLength;
  let countWords;
  let readingTime;
  text ? (textLength = text.length + 1) : (textLength = 0);
  text ? (countWords = text.split(" ").length) : (countWords = 0);
  readingTime = (countWords * 0.0032).toFixed(3);

  const onChangeHandle = (event) => {
    setText(event.target.value);
  };

  const convertUpperCase = (event) => {
    event.preventDefault();

    if (text) {
      const newText = text.toUpperCase();
      setText(newText);
    }
  };

  const convertLowerCase = (event) => {
    event.preventDefault();

    if (text) {
      const newText = text.toLowerCase();
      setText(newText);
    }
  };

  const convertCapitaliseCase = (event) => {
    event.preventDefault();

    if (text) {
      const wordsArray = text.split(" ");

      // filter empty string in array
      const filteredArray = wordsArray.filter(function (element) {
        return element !== "";
      });

      const newWordArray = filteredArray.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      });
      const newText = newWordArray.join(" ");
      setText(newText);
    }
  };

  const convertSentenceCase = (event) => {
    event.preventDefault();
    if (text) {
      const sentencesArray = text.split(".");
      if (sentencesArray[sentencesArray.length - 1] == "") {
        sentencesArray.pop();
      }

      const newSentencesArray = sentencesArray.map((sentence) => {
        const splittedWord = sentence.split(" ");

        if (splittedWord[0] == "") {
          splittedWord.shift();
        }
        sentence = splittedWord.join(" ");
        return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
      });
      const newText = newSentencesArray.join(". ");
      setText(newText);
    }
  };

  const downloadButton = (event) => {
    event.preventDefault();
    const blob = new Blob([text], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "your-text.txt";
    link.click();

    window.URL.revokeObjectURL(link.href);
    console.log("hy");
  };

  const copyToClipboard = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
  };
  const clearInput = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div className="relative w-[100%]">
      <Textarea
        color="green"
        label="Enter here"
        rows={6}
        value={text}
        onChange={onChangeHandle}
      />

      <div className="flex w-full justify-end py-1.5 ">
        <div className="flex flex-wrap gap-2 ">
          <Button size="sm" className="rounded-md" onClick={convertUpperCase}>
            UpperCase
          </Button>
          <Button size="sm" className="rounded-md" onClick={convertLowerCase}>
            LowerCase
          </Button>
          {/* prettier-ignore */}
          <Button size="sm" className="rounded-md" onClick={convertCapitaliseCase}>
            Capitalise
          </Button>
          {/* prettier-ignore */}
          <Button size="sm" className="rounded-md" onClick={convertSentenceCase}>
            sentence Case
          </Button>

          <Popover>
            <PopoverHandler onClick={downloadButton}>
              {/* prettier-ignore */}
              <Button size="sm" className="rounded-md" >
                Download
              </Button>
            </PopoverHandler>
            <PopoverContent>Download Started</PopoverContent>
          </Popover>

          <Popover>
            <PopoverHandler onClick={copyToClipboard}>
              {/* prettier-ignore */}
              <Button size="sm" className="rounded-md"  >
                Copy to ClipBoard
              </Button>
            </PopoverHandler>
            <PopoverContent>Copied</PopoverContent>
          </Popover>

          {/* prettier-ignore */}
          <Button size="sm" color="red" variant="text" className="rounded-md" onClick={clearInput}>
            Clear
          </Button>
        </div>
      </div>

      <div>
        <p style={{ color: "blue-gray", fontSize: "0.88rem" }} className="mt-4">
          {textLength} charcters and {countWords} words.
        </p>

        <p style={{ fontPalette: "dark", fontSize: "1.1rem" }} className="mt-4">
          Time to read Page : &nbsp;
          <span style={{ color: "blue-gray", fontSize: "0.9rem" }}>
            {readingTime} minutes
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
