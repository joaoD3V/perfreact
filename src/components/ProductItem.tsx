import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { AddProductTOWIshListProps } from './AddProductToWishList';
const AddProductToWishList = dynamic<AddProductTOWIshListProps>(
  () => {
    return import('./AddProductToWishList').then(
      (mod) => mod.AddProductToWishList
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

import { Product } from './SearchResults';
import lodash from 'lodash';

type ProductItemProps = {
  product: Product;
  onAddToWishList: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
    // Não basta apenas comparar o id, pois os outros campos podem mudar. Sendo assim, será necessário utilizar o Object.is
    // Object.is faz uma comparação profunda
  }
);
