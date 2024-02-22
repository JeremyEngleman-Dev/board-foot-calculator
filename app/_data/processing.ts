/* "use client"

import { ThicknessOptions, Board } from "./definitions";

const findThickness = (thickness: string) => {
    ThicknessOptions.forEach(item => {
        if(item.label == thickness){
            return (item.value)
        }
    });
}

export const processData = (board: Board) => {
    //Individual board price calculation
    let Length: number = 0, Width = 0;
    const thickness: number = Number(findThickness(board.thickness));
    if(board.lengthFT !== ""){Length = Length + board.lengthFT};
    if(board.lengthIN !== ""){Length = Length + Math.round(((board.lengthIN/12)*1000)/1000)};
    if(board.widthFT !== ""){Width = Width + (board.widthFT/12)};
    if(board.widthIN !== ""){Width = Width + board.widthIN};
    board.totalPrice = ((Length * Width * thickness)/12)*Number(board.count);
}

export default processData; */