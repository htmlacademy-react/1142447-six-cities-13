type OfferInsideListType = {
  features: string[];
}

const OfferInsideList = ({ features }: OfferInsideListType): JSX.Element => (
  <ul className="offer__inside-list">
    {features.map((item) => (
      <li className="offer__inside-item" key ={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default OfferInsideList;
