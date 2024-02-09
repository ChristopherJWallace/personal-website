

interface StoreItemProps {
  title: string;
  desc: string;
  price: number;
}

export function StoreItem(props: StoreItemProps) {
  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    <button>{props.price}</button>
    </>
  )
}
