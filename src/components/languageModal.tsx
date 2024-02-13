import * as Dialog from "@radix-ui/react-dialog";

export default function LanguageModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <h1>Hello</h1>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
