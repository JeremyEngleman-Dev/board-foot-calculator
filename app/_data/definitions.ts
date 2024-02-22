export type ThicknessOption = {
    label: string;
    value: number;
};

export type Board = {
    key: number;
    thickness: string;
    widthFT: number;
    widthIN: number;
    lengthFT: number;
    lengthIN: number;
    price: number;
    count: number;
    totalPrice: number;
}

export const ThicknessOptions: ThicknessOption[] = [
    { label: "4/4", value: 1},
    { label: "5/4", value: 1.25},
    { label: "6/4", value: 1.5},
    { label: "8/4", value: 2},
    { label: "10/4", value: 2.5},
    { label: "12/4", value: 3}
];