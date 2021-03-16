import { ClientFunction, Selector } from "testcafe";

export const getByTestId = (testId: string): Selector => Selector(`[data-test-id="${testId}"]`);
