export type AddProductTOWIshListProps = {
  onAddToWishList: () => void;
  onRequestClose: () => void;
};

export function AddProductToWishList({
  onAddToWishList,
  onRequestClose,
}: AddProductTOWIshListProps) {
  return (
    <span>
      Desejar adicionar aos favoritos?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
