import Select from "../../../components/Select";

export default function RowCards({marketplaces, setMarketplaces}) {
  const cardList = [
    {value: 'all', name: "Все маркетплейсы"},
    {value: "Wilberries", name: "Wildberries"},
    {value: "Ozon", name: "OZON"},
    {value: "Yandex Market", name: "Яндекс Маркет"},
    {value: "Sber Market", name: "СберМаркет"},
    {value: "Aliexpress", name: "Aliexpress"},
  ];

  return (
      <Select
          value={marketplaces}
          onChange={selectedSort => setMarketplaces(selectedSort)}
          options={cardList}
      />
  );
}