import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import ShowClothes from "../components/ShowClothes";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ShowClothes />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
 .image1 {
      position: absolute;
      top: 700px;
      height: 42%;
      left: 31px;
      z-index: 1;
  }
  .image2 {    
      position: absolute;
       height: 28%;
      top: 485px;
      left: 15px;
      z-index: 2;
      }
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
