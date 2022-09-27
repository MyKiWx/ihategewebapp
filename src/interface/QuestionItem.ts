export interface QuestionItem {
    label: string,
    placeholder?: string,
    choices: string[],
    // value?: string | number | undefined,
    // setValue?: ((nextValue: string) => void) | undefined,
    typeBox?: string,
    descrip?: string,
    // setValueX2?: ((nextValue: boolean) => void) | undefined
    // setValueX2?: ((nextValue: boolean) => void),
}