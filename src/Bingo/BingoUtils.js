export function bingoBoardParsedFromURL(queryString) {
  const boardArray = queryString.substring(1).split("_");
  if (![9, 16, 25].includes(boardArray.length)) {
    return null;
  }

  const boardSize = Math.sqrt(boardArray.length);
  const result = [];
  let h, w;
  for (h = 0; h < boardSize; h++) {
    for (w = 0; w < boardSize; w++) {
      const placement = `${w},${h}`;
      const arrayIndex = h * boardSize + w;
      if (boardArray[arrayIndex] !== "~") {
        result.push({ identifier: decodeURIComponent(boardArray[arrayIndex]), placement });
      }
    }
  }
  return [boardSize, result];
}
