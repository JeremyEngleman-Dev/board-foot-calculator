export type ThicknessOption = {
    label: string;
    value: number;
};

type Nullable = number | "";

export type Board = {
    thickness: string;
    widthFT: Nullable;
    widthIN: Nullable;
    lengthFT: Nullable;
    lengthIN: Nullable;
    price: Nullable;
    count: Nullable;
}